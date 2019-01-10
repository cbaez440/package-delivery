

module.exports = {


  friendlyName: 'Update warehouse',


  description: 'updates the warehouse\'s packages',


  inputs: {
    warehouseId: {
      type: 'number',
      example: 5,
      description: '',
      required: true
    },
    isFull: {
      type: 'boolean',
      example: true,
      description: '',
      required: true
    }
  },

  fn: async function (inputs, exits) {

    var valuesToSet = { full: inputs.isFull };

    var result = await Warehouse.updateOne({ id: inputs.warehouseId })
    .set(valuesToSet);

    console.log(result);

    return exits.success('all done');
  }
};

