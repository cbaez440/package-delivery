module.exports = {


  friendlyName: 'Get package state',


  description: 'gets the packate state randomly and weightly when reaches its destination',


  inputs: {

  },


  exits: {

    success: {
      outputFriendlyName: 'Package state',
    },

  },


  fn: async function (inputs) {

    var states = {
      [sails.config.globals.PACKAGE_DELIVERED]: 30,
      [sails.config.globals.PACKAGE_RETURNED]: 1
    };

    // https://stackoverflow.com/a/43566526
    var array = [];
    for (var state in states) {
      if (states.hasOwnProperty(state)) {
        for (var i = 0; i < states[state]; i++) {
          array.push(state);
        }
      }
    }

    return array[Math.floor(Math.random() * array.length)];

  }


};

