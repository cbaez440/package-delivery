module.exports = {


  friendlyName: 'Check all warehouses space',


  description: 'check if the warehouses are full or not',

  fn: async function () {
    var warehouses = await sails.helpers.database.getAllWarehouses();

    for (var i = 0; warehouses.length; i++) {

      await sails.helpers.checkWarehouseSpace({ warehouseId: warehouses[i].id });

    }

  }


};

