module.exports = {


  friendlyName: 'Get warehouses by proximity',


  description: 'returns warehouses sorted by proximity based on the destination address of a package',


  inputs: {
    destinationAddress: {
      type: 'string',
      example: 'calle 60 877',
      description: '',
      required: true
    }
  },

  fn: async function (inputs) {

    var warehouses = await sails.helpers.database.getAllWarehouses();

    for (var i = 0; i < warehouses.length; i++) {

      var warehouse = warehouses[i];
      var city = warehouse.city;

      var distance = await sails.helpers.maps.getDistance.with({ origin: city, destination: inputs.destinationAddress }); // meters
      warehouse.distance = distance;
    }

    warehouses.sort((a, b) => {
      return a.distance - b.distance;
    });

    return warehouses;
  }


};

