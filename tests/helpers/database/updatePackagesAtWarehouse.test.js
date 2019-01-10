test('should update a package', async () => {

  var result = await sails.helpers.database.updatePackagesAtWarehouse.with({ warehouseId: 11, operation: '+' });

  expect(result).toBe('all done');

});
