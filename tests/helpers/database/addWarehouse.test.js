test('should add a warehouse', async () => {

  var result = await sails.helpers.database.addWarehouse.with({ name: 'WH00', city: 'San Juan, Argentina', limit: 20, full: false, packages: 0 })

  expect(result).toBe('all done')

});
