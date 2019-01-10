test('should add warehouses', async () => {

  var result = await sails.helpers.init.addDefaultWarehouses();

  expect(result).toBe('all done');
});
