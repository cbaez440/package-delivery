module.exports = {


  friendlyName: 'Get a warehouse',


  description: 'returns warehouse data',


  inputs: {
    warehouseId: {
      type: 'number',
      example: 0,
      description: '',
      required: true
    },
  },


  exits: {

    success: {
      outputFriendlyName: 'Warehouse',
    },

  },


  fn: async function (inputs) {

    // Get warehouse.
    var warehouse = await Warehouse.find({
      id: inputs.warehouseId
    });

    // Send back the result through the success exit.
    return warehouse;

  }


};

