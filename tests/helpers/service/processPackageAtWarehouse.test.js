test('should send a package to customer address', async () => {

  var packageToSend = await Package.find({ id: 5 });

  await sails.helpers.service.processPackageAtWarehouse.with({ package: packageToSend[0] });

});
