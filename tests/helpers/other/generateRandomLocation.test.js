test('should returns a random location', async () => {

  var location = await sails.helpers.other.generateRandomLocation.with({ position: 5 });
  
  console.log(location);
  expect(typeof(location)).toBe('string');

});
