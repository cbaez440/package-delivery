test('should update a package', async () => {

  var result = await sails.helpers.updatePackage.with({ packageId: 5, state: 'test', cost: 1 });

  console.log(result);
});