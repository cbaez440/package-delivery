test('should update a package', async () => {

	await sails.helpers.updatePackagesAtWarehouse.with({ warehouseId: 11, operation: '-' });

});
