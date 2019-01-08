test('should returns a package state', async () => {
	
  var state = await sails.helpers.getPackageState();
  console.log(state);

});
