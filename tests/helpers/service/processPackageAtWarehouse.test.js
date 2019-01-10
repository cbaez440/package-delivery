test('should send a package to customer address', async () => {

  var packageToSend = await Package.find({ id: 22 });

  var result = await sails.helpers.service.processPackageAtWarehouse.with({ package: packageToSend[0] });

  expect(result).toBe('all done');

});
