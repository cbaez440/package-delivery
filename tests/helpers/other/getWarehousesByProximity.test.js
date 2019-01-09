test('should returns warehouses sorted by proximity', async () => {

  var warehouses = await sails.helpers.other.getWarehousesByProximity.with({ destinationAddress: "Calle 856 30, Quilmes" });
  console.log(warehouses);
  
  expect(warehouses).not.toBeUndefined();
  expect(warehouses.length).not.toBe(0);

});
