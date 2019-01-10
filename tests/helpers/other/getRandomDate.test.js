test('should returns a random date', async () => {

  var date = await sails.helpers.other.getRandomDate();

  console.log(date);
  expect(typeof(date)).toBe('object');

});
