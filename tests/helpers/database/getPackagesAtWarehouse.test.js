test('should return packages', async () => {

  let packages = await sails.helpers.database.getPackages.with({ state: [sails.config.globals.PACKAGE_AT_WAREHOUSE, sails.config.globals.PACKAGE_RETURNED] });
  console.log(packages);
  expect(packages).not.toBeUndefined();
  expect(packages.length).not.toBe(0);

});
