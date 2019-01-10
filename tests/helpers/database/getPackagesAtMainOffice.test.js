test('should return packages', async () => {

	var criteria = {
	  state: sails.config.globals.PACKAGE_AT_MAIN_OFFICE,
	}

	var packages = await sails.helpers.database.getPackages.with({ criteria: criteria });

	console.log(packages);
	expect(packages).not.toBeUndefined();
	expect(packages.length).not.toBe(0);

});
