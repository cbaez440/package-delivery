test('should returns a package state', async () => {

  var state = await sails.helpers.other.getPackageState();
  console.log(state);

  expect(typeof state).toBe('string');
});
