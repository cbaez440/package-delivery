module.exports = {


  friendlyName: 'Get packages',


  description: 'returns packages',


  inputs: {
    package_state: {
      type: 'string',
      example: 'delivered',
      description: '',
      required: true
    },
  },


  exits: {

    success: {
      outputFriendlyName: 'Packages',
    },

  },


  fn: async function (inputs) {

    // Get packages.
    var packages = await Package.find({
      state: inputs.package_state
    });

    // Send back the result through the success exit.
    return packages;

  }


};

