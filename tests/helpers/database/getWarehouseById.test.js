test('should return a warehouse', async () => {

  let warehouse = await sails.helpers.database.getWarehouseById.with({ warehouseId: 1 });
  console.log(warehouse);
  expect(warehouse).not.toBeUndefined();
  expect(warehouse.length).toBe(1);

});
