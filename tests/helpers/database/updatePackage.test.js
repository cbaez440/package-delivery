test('should update a package', async () => {

  var result = await sails.helpers.database.updatePackage.with({ packageId: 1005, state: sails.config.globals.PACKAGE_DELIVERED, timestamp: 1546878180109 });

  expect(result).toBe('all done')

});

test('should update the field "packages" of a warehouse', async () => {

  var result = await sails.helpers.database.updatePackagesAtWarehouse.with({ warehouseId: 1, operation: '+' });

  expect(result).toBe('all done');


});

test('should update the field "full" of a warehouse', async () => {

  var result = await sails.helpers.database.updateFullAtWarehouse.with({ warehouseId: 1, isFull: false });

  expect(result).toBe('all done');

});

