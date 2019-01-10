test('should returns if the warehouse is full or not', async () => {

  var isFull = await sails.helpers.other.warehouseIsFull.with({ warehouseId: 11 });
  console.log(isFull);
  expect(typeof(isFull)).toBe('boolean');

});
