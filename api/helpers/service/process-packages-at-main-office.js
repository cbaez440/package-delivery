module.exports = {


  friendlyName: 'Process packages at main office',


  description: 'processes packages from main office to warehouse',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    var packagesToDistribute = await sails.helpers.database.getPackages.with({ state: sails.config.globals.PACKAGE_AT_MAIN_OFFICE });

    console.log(packagesToDistribute);

    for (var i = 0; i < packagesToDistribute.length; i++) {
      await sails.helpers.service.processPackageAtMainOffice.with({ package: packagesToDistribute[i] });
    }
  }


};

