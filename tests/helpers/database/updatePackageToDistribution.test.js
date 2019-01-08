test('should update a package', async () => {

  var result = await sails.helpers.database.updatePackage.with({ packageId: 5, state: 'test', warehouseId: 11 });

  console.log(result);
});
