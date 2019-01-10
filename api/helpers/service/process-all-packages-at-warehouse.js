module.exports = {


  friendlyName: 'Process packages at warehouse',


  description: 'processes packages from warehouse to destination',


  fn: async function (exits) {
    var packagesToSend = await sails.helpers.database.getPackages.with({ state: [sails.config.globals.PACKAGE_AT_WAREHOUSE, sails.config.globals.PACKAGE_RETURNED] });

    for (var i = 0; i < packagesToSend.length; i++) {
      await sails.helpers.service.processPackageAtWarehouse.with({ package: packagesToSend[i] });
    }

    // After all packages were processed, the system check if a warehouse has space to save more
    await sails.helpers.other.checkAllWarehousesSpace();

    return 'all done'
  }


};

