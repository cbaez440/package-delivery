test('should return packages', async () => {
  let packages = await sails.helpers.getPackages.with({ package_state: sails.config.globals.PACKAGE_AT_MAIN_OFFICE });
  //console.log(packages);
  expect(packages).not.toBeUndefined();
  expect(packages.length).not.toBe(0);
});
