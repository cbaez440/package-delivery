module.exports = {


  friendlyName: 'Add random package',


  description: '',


  fn: async function () {

    for (var i = 0; i < 1000; i++) {

      var code = Math.floor(Math.random() * 10000000);
      var deliveryDate = await sails.helpers.other.getRandomDate();
      var state = sails.config.globals.PACKAGE_AT_MAIN_OFFICE;
      var deliveryTimestamp = 0;
      var deliveryCost = 0;
      var warehouseId;
      var deliveryAddress = await sails.helpers.other.getRandomLocation.with({ position: i });

      await sails.helpers.database.addPackage.with({
        code: code,
        deliveryAddress: deliveryAddress,
        deliveryDate: deliveryDate,
        state: state,
        deliveryTimestamp: deliveryTimestamp,
        deliveryCost: deliveryCost,
      });
    }

    return 'all done';
  }


};

