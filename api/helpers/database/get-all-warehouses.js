module.exports = {


  friendlyName: 'Get all warehouses',


  description: 'returns all warehouses',

  fn: async function () {

    var warehouses = await Warehouse.find({
      name: { '!' : 'WH00' } // records with name 'WH00' are used for tests
    });

    return warehouses;

  }


};

