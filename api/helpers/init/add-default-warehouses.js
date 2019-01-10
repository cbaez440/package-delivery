module.exports = {


  friendlyName: 'Add default warehouses',


  description: '',


  fn: async function () {
    var names = ['WH01', 'WH02', 'WH03', 'WH04', 'WH05', 'WH06', 'WH07', 'WH08', 'WH09', 'WH10']
    var cities = ['Buenos Aires', 'Rosario, Santa Fe', 'Cordoba, Argentina', 'Trelew, Argentina', 'Mendoza, Argentina', 'La Plata, Argentina', 'San Miguel de Tucuman, Argentina', 'Mar de Plata, Argentina', 'Salta, Argentina', 'Santa Fe, Argentina']
    var limits = [200, 70, 150, 140, 150, 100, 120, 180, 140, 70]

    for (var i = 0; i < names.length; i++) {
      await sails.helpers.database.addWarehouse.with({ name: names[i], city: cities[i], limit: limits[i], full: false, packages: 0 })
    }

    return 'all done'
  }
  
};

