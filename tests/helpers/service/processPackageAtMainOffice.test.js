test('should send a package to a warehouse', async () => {

  var packageToSend = await Package.find({ id: 22 });

  var result = await sails.helpers.service.processPackageAtMainOffice.with({ package: packageToSend[0] });

  expect(result).toBe('all done');

});
