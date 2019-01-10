module.exports = {


  friendlyName: 'Update warehouse',


  description: 'updates a warehouse depending on the context',


  inputs: {
    warehouseId: {
      type: 'number',
      example: 5,
      description: '',
      required: true
    },
    context: {
      type: 'string',
      example: 'delivered',
      description: '',
      required: true
    },
    isFull: {
      type: 'boolean',
      example: false,
      description: '',
    },
  },

  fn: async function (inputs, exits) {
    if (inputs.context === sails.config.globals.PACKAGE_DELIVERED) {

      await sails.helpers.database.updatePackagesAtWarehouse.with({ warehouseId: inputs.warehouseId, operation: '-' });

    } else if (inputs.context === sails.config.globals.SEND_PACKAGE_TO_WAREHOUSE) {

      await sails.helpers.database.updatePackagesAtWarehouse.with({ warehouseId: inputs.warehouseId, operation: '+' });

    } else if (inputs.context === sails.config.globals.WAREHOUSE_SPACE) {

      await sails.helpers.database.updateFullAtWarehouse.with({ warehouseId: inputs.warehouseId, isFull: inputs.isFull });

    } else {
      return exits.error('error');
    }

    return exits.success('all done');
  }


};

