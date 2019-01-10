var distance = require('google-distance-matrix');

module.exports = {


  friendlyName: 'Get distance',


  description: 'returns the distance between two locations',

  inputs: {
    origin: {
      type: 'string',
      example: 'Rosario, Santa Fe',
      description: '',
      required: true
    },
    destination: {
      type: 'string',
      example: 'Calle 8, La Plata',
      description: '',
      required: true
    }
  },

  fn: async function (inputs, exits) {

    var origins = [inputs.origin];
    var destinations = [inputs.destination];

    distance.mode('driving');

    await distance.matrix(origins, destinations, (err, distances) => {
      if (!err)
      {console.log(distances);}

      if (distances === undefined) {
        console.log("ERROR: %s", destinations)
        return exits.success(-1)
      }

      if (distances.rows[0].elements[0].distance === undefined) {
        console.log("ERROR: %s", destinations)
        return exits.success(-1)
      }

      var distance = distances.rows[0].elements[0].distance.value; // meters
      return exits.success(distance)
    });
  }


};
