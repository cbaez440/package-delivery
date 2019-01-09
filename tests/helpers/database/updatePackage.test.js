test('should update a package', async () => {

  var result = await sails.helpers.database.updatePackage.with({ packageId: 5, sails.config.globals.PACKAGE_DELIVERED, timestamp: 1546878180109 });

  console.log(result);
});
