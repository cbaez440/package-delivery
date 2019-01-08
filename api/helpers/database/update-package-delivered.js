module.exports = {


  friendlyName: 'Update package',


  description: 'updates a package after delivered',


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
    timestamp: {
      type: 'number',
      example: 80,
      description: '',
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
      deliveryCost: inputs.cost,
      deliveryTimestamp: inputs.timestamp
    };

    var result = await Package.updateOne({ id: inputs.packageId })
    .set(valuesToSet);

    console.log(result);
    return exits.success();
  }
};
