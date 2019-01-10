test('should process all packages at warehouse', async () => {

  var result = await sails.helpers.service.processAllPackagesAtWarehouse();

  expect(result).toBe('all done');
});
