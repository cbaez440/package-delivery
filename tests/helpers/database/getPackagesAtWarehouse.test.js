var moment = require('moment');

test('should return packages', async () => {

  var currentDay = moment(new Date()).format('YYYY/MM/DD');
  console.log(currentDay);

  var criteria = {
	  state: [sails.config.globals.PACKAGE_AT_WAREHOUSE, sails.config.globals.PACKAGE_RETURNED],
	  deliveryDate: currentDay
  };

  var packages = await sails.helpers.database.getPackages.with({ criteria: criteria });
  console.log(packages);
  expect(packages).not.toBeUndefined();
  expect(packages.length).not.toBe(0);

});
