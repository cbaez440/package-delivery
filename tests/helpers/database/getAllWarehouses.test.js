test('should return all warehouses', async () => {

  let warehouses = await sails.helpers.database.getAllWarehouses();
  console.log(warehouses);
  expect(warehouses).not.toBeUndefined();
  expect(warehouses.length).not.toBe(0);

});
