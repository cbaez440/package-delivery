test('should update a warehouse', async () => {

  var result = await sails.helpers.database.updateFullAtWarehouse.with({ warehouseId: 11, isFull: false });

  expect(result).toBe('all done');

});
