test('should process all packages at warehouse', async () => {

  var result = await sails.helpers.processPackagesAtWarehouse();

  expect(result).toBe('all done');

});
