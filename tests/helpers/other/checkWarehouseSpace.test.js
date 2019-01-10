test('should check the space of a warehouse', async () => {

  var result = await sails.helpers.other.checkWarehouseSpace.with({ warehouseId: 11 });

  expect(result).toBe('all done');
});
