test('should return a warehouse', async () => {
  let warehouse = await sails.helpers.getWarehouse.with({ warehouseId: 6 });
  console.log(warehouse);
  expect(warehouse).not.toBeUndefined();
  expect(warehouse.length).toBe(1);
});
