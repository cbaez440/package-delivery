test('should send a package to customer address', async () => {

	var packageToSend = await Package.find({ id: 5 });

	console.log(packageToSend[0].warehouseId);

	await sails.helpers.processPackageAtWarehouse.with({ package: packageToSend[0] });

});
