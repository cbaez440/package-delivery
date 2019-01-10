test('should process all packages at main office', async () => {

  var result = await sails.helpers.service.processAllPackagesAtMainOffice();

  expect(result).toBe('all done');

});
