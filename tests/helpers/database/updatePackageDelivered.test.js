test('should update a package', async () => {

  var result = await sails.helpers.updatePackage.with({ packageId: 5, state: 'test', timestamp: 1546878180109 });

  console.log(result);
});
