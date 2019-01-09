module.exports = {


  friendlyName: 'Update package',


  description: 'updates a package that goes to a warehouse',


  inputs: {
    packageId: {
      type: 'number',
      example: 0,
      description: '',
      required: true
    },
    state: {
      type: 'string',
      example: 'delivered',
      description: '',
      required: true
    },
    warehouseId: {
      type: 'number',
      example: 8,
      description: '',
      required: true
    }
  },


  exits: {

    success: {
      outputFriendlyName: 'Package',
    },

  },


  fn: async function (inputs, exits) {

    var  valuesToSet = {
      state: inputs.state,
      warehouseId: inputs.warehouseId
    };

    var result = await Package.updateOne({ id: inputs.packageId })
    .set(valuesToSet);

    console.log(result);
    return exits.success();
  }
};

