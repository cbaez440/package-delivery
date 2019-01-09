test('should get the distance', async () => {
  let distance = await sails.helpers.maps.getDistance.with({ origin: 'Rosario, Santa Fe', destination: 'Calle 59 y 8, La Plata' });
  expect(typeof(distance)).toBe('number');
});
