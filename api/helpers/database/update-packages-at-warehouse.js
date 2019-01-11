module.exports = {


  friendlyName: 'Update warehouse',


  description: 'updates the warehouse\'s field "packages"',


  inputs: {
    warehouseId: {
      type: 'number',
      example: 5,
      description: '',
      required: true
    },
    operation: {
      type: 'string',
      example: '+',
      description: '',
      required: true
    }
  },

  fn: async function (inputs, exits) {

    // Using SQL query we take advantaje of mysql's native concurrency when update
    var WAREHOUSE_SQL = 'UPDATE package_delivery.warehouse ' +
      'SET package_delivery.warehouse.packages = package_delivery.warehouse.packages ' + inputs.operation + ' 1 ' +
      'WHERE package_delivery.warehouse.id = ' + inputs.warehouseId;

    var result = await sails.sendNativeQuery(WAREHOUSE_SQL);
    console.log('Warehouse update: %s', JSON.stringify(result));

    return exits.success('all done');
  }
};

