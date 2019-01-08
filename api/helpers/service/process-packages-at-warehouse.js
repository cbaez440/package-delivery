module.exports = {


  friendlyName: 'Process packages at warehouse',


  description: 'processes packages from warehouse to destination',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    var packagesToSend = await sails.helpers.database.getPackages.with({ state: sails.config.globals.PACKAGE_AT_WAREHOUSE });

    console.log(packagesToSend);

    for (var i = 0; i < packagesToSend.length; i++) {
      await sails.helpers.service.processPackageAtWarehouse.with({ package: packagesToSend[i] });
    }
  }


};

