module.exports = {


  friendlyName: 'Simulate delivery time',


  description: 'Simulates the passage of time',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    var min = 1;
    var max = 3;
    var rand = Math.floor(Math.random() * (max - min + 1) + min); // Generate Random number between 5 - 10
    console.log('Wait for ' + rand + ' seconds');

    // https://stackoverflow.com/a/13448477
    await new Promise(resolve => setTimeout(resolve, rand * 1000));

    return exits.success();
  }

};

