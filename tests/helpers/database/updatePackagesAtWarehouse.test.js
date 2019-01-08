test('should update a package', async () => {

  await sails.helpers.database.updatePackagesAtWarehouse.with({ warehouseId: 11, operation: '-' });

});
