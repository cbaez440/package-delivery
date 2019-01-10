module.exports = {


  friendlyName: 'Is full',


  description: 'returns if a warehouse is full or no',


  inputs: {
    warehouseId: {
      type: 'number',
      example: 5,
      description: '',
      required: true
    },
  },


  fn: async function (inputs) {
    var warehouse = await sails.helpers.database.getWarehouseById.with({ warehouseId: inputs.warehouseId });

    var limit = warehouse[0].limit;
    var packages = warehouse[0].packages;
    var occupied = ((packages * 100) / limit).toFixed(3);

    if (occupied > sails.config.globals.OCUPATION_LIMIT) {
      return true;
    } else {
      return false;
    }
  }


};

