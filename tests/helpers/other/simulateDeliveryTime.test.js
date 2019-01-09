test('should sleep the execution', async () => {

  var result = await sails.helpers.other.simulateDeliveryTime();

  expect(result).toBe('all done')
});
