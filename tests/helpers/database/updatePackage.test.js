test('should update a package', async () => {

  var result = await sails.helpers.database.updatePackage.with({ packageId: 22, state: sails.config.globals.PACKAGE_DELIVERED, timestamp: 1546878180109 });

  expect(result).toBe('all done')

});
