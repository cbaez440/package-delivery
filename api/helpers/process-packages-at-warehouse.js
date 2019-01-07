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
    var packagesToSend = await sails.helpers.getPackages.with({ state: sails.config.globals.PACKAGE_AT_WAREHOUSE });

    console.log(packagesToSend);

    for (var i = 0; i < packagesToSend.length; i++) {
      var pack = packagesToSend[0];
      var warehouse = await sails.helpers.getWarehouse.with({ warehouseId: pack.warehouse_id });

      var warehouseLocation = warehouse.city;
      var customerDestination = pack.deliveryAddress;

      var distance = await sails.helpers.getDistance.with({ origin: warehouseLocation, destinacion: customerDestination }); // meters
      distance = distance / 1000; // kms
      var cost = distance / sails.config.globals.KMS_TRAVELED_PER_USD; // USD
      var newState = sails.config.globals.PACKAGE_TOWARDS_DESTINATION;

      sails.helpers.updatePackage.with({ packageId: pack.id, state: newState, cost: cost });
    }
  }


};

