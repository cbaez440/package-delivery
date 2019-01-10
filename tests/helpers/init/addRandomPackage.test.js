test('should add a package', async () => {

  var result = await sails.helpers.init.addRandomPackage();

  expect(result).toBe('all done');
});
