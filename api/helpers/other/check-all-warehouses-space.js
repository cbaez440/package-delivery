module.exports = {


  friendlyName: 'Check all warehouses space',


  description: 'check if the warehouses are full or not',

  fn: async function () {
    var warehouses = await sails.helpers.database.getAllWarehouses();

    for (var i = 0; i < warehouses.length; i++) {

      await sails.helpers.other.checkWarehouseSpace.with({ warehouseId: warehouses[i].id });

    }

  }


};

