test('should add a package', async () => {

  var result = await sails.helpers.database.addPackage.with({ 
        code: 12345645, 
        deliveryAddress: '116 Y 77, Buenos Aires', 
        deliveryDate: new Date(), 
        state: 'test', 
        deliveryTimestamp: 0,
        deliveryCost: 0
      })

  expect(result).toBe('all done')

});
