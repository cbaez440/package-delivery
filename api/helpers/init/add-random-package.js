module.exports = {


  friendlyName: 'Add random package',


  description: '',


  fn: async function () {

    for (var i = 0; i < 10; i++) {

      var code = Math.floor(Math.random() * 10000000);
      var deliveryDate = new Date(new Date().getTime() + Math.random() * (new Date(2019, 0, 10).getTime() - new Date().getTime()));
      var state = sails.config.globals.PACKAGE_AT_MAIN_OFFICE;
      var deliveryTimestamp = 0;
      var deliveryCost = 0;
      var warehouseId;
      var deliveryAddress = await sails.helpers.other.generateRandomLocation.with({ position: i });

      await sails.helpers.database.addPackage.with({ 
        code: code, 
        deliveryAddress: deliveryAddress, 
        deliveryDate: deliveryDate, 
        state: state, 
        deliveryTimestamp: deliveryTimestamp,
        deliveryCost: deliveryCost,
      })
    }

    return 'all done'
  }


};

