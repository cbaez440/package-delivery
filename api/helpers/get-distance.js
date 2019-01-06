var distance = require('google-distance-matrix');

module.exports = {


  friendlyName: 'Get distance',


  description: 'returns the distance between two locations',

  //sync: true,

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

  exits: {

    success: {

    },

  },


  fn: async function (inputs, exits) {

    var origins = [inputs.origin];
    var destinations = [inputs.destination];

    distance.mode('driving');

    await distance.matrix(origins, destinations, (err, distances) => {
      if (!err)
      {console.log(distances);}
      console.log(distances.rows[0].elements);

      var distance = distances.rows[0].elements[0].distance.value; // meters
      return exits.success(distance);
    });
  }


};
