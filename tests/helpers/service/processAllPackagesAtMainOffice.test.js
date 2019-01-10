test('should process all packages at main office', async () => {

  var result = await sails.helpers.processPackagesAtMainOffice();

  expect(result).toBe('all done');

});
