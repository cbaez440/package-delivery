module.exports = {


  friendlyName: 'Get packages',


  description: 'returns packages',


  inputs: {
    state: {
      type: ['string'],
      example: [],
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
      state: inputs.state
    });

    // Send back the result through the success exit.
    return packages;

  }


};

