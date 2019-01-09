module.exports = {


  friendlyName: 'Process one package at main office',


  description: 'processes one package from main office to warehouse',


  inputs: {
    package: {
      type: {},
      example: {},
      description: '',
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    // TODO
  }


};

