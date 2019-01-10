var moment = require('moment');

module.exports = {


  friendlyName: 'Process packages at warehouse',


  description: 'processes packages from warehouse to destination',


  fn: async function (exits) {
    
    var currentDay = moment(new Date()).format('YYYY/MM/DD');

    var criteria = {
      state: [sails.config.globals.PACKAGE_AT_WAREHOUSE, sails.config.globals.PACKAGE_RETURNED],
      deliveryDate: currentDay
    }

    var packagesToSend = await sails.helpers.database.getPackages.with({ criteria: criteria });

    var promises = [];

    for (var i = 0; i < packagesToSend.length; i++) {
      promises.push(sails.helpers.service.processPackageAtWarehouse.with({ package: packagesToSend[i] }));
    }

    Promise.all(promises)    
   .then(async function(data) { 
      await sails.helpers.other.checkAllWarehousesSpace();
      return 'all done'
    })
   .catch(function(err){
      console.log(err)
      return 'error'
   });

  }


};

