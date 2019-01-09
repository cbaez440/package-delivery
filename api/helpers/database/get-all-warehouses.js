module.exports = {


  friendlyName: 'Get all warehouses',


  description: 'returns all warehouses',

  fn: async function (inputs) {

    var warehouses = await Warehouse.find({
      id: { '!' : 11 } // record with id "11" is used for tests
    });

    return warehouses;

  }


};

