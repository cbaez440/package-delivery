module.exports = {


  friendlyName: 'Check warehouses space',

  inputs: {
    warehouseId: {
      type: 'number',
      example: 11,
      description: '',
      required: true
    }
  },

  description: 'check if the warehouses are full or not',

  fn: async function (inputs, exits) {

    var isFull = await sails.helpers.other.warehouseIsFull.with({ warehouseId: inputs.warehouseId });

    if (isFull) {
      await sails.helpers.database.updateWarehouse.with({ context: sails.config.globals.WAREHOUSE_SPACE, isFull: true, warehouseId: inputs.warehouseId });
    } else {
      await sails.helpers.database.updateWarehouse.with({ context: sails.config.globals.WAREHOUSE_SPACE, isFull: false, warehouseId: inputs.warehouseId });
    }

    return exits.success();

  }


};

