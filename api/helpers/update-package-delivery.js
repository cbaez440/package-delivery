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


  fn: async function (inputs) {

    var  valuesToSet = {
        state: inputs.state,
        deliveryCost: inputs.cost
    };

    var resp = await Package.updateOne({ id: inputs.packageId })
    .set(valuesToSet);

    return resp;
  }
};