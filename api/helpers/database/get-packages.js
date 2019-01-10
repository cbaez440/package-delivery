module.exports = {


  friendlyName: 'Get packages',


  description: 'returns packages',


  inputs: {
    criteria: {
      type: {},
      example: {},
      description: '',
      required: true
    },
  },

  fn: async function (inputs) {

    // Get packages.
    var packages = await Package.find(inputs.criteria);

    // Send back the result through the success exit.
    return packages;

  }


};

