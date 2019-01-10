var moment = require('moment');

module.exports = {


  friendlyName: 'Process packages at main office',


  description: 'processes packages from main office to warehouse',


  fn: async function (exits) {

    //var nextDay = moment(new Date()).add(1, 'day').format('YYYY/MM/DD');
    var nextDay = moment(new Date()).format('YYYY/MM/DD'); // For tests

  	var criteria = {
      state: sails.config.globals.PACKAGE_AT_MAIN_OFFICE,
      deliveryDate: nextDay
    };

    var packagesToDistribute = await sails.helpers.database.getPackages.with({ criteria: criteria });

    for (var i = 0; i < packagesToDistribute.length; i++) {
      await sails.helpers.service.processPackageAtMainOffice.with({ package: packagesToDistribute[i] });
    }

     return 'all done';
  
  }

};