test('should send a package to customer address', async () => {

  var packageToSend = await Package.find({ id: 1 });

  var result = await sails.helpers.service.processPackageAtMainOffice.with({ package: packageToSend[0] });

  expect(result).toBe('all done')

});
