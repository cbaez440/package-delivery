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
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    if (inputs.context === sails.config.globals.PACKAGE_DELIVERED) {

        await sails.helpers.database.updatePackagesAtWarehouse.with({ warehouseId: inputs.warehouseId, operation: '-' });

    } else {
        return exits.error();
    }

    return exits.success();
  }


};

