module.exports = {


  friendlyName: 'Update a package',


  description: 'updates a package depending on the state',


  inputs: {
    packageId: {
      type: 'number',
      example: 0,
      description: '',
      required: true
    },
    state: {
      type: 'string',
      example: 'delivered',
      description: '',
    },
    cost: {
      type: 'number',
      example: 80,
      description: '',
    },
    warehouseId: {
      type: 'number',
      example: 8,
      description: '',
    },
    timestamp: {
      type: 'number',
      example: 1547059116917,
      description: '',
    }
  },


  fn: async function (inputs, exits) {

    var  valuesToSet = {};

    switch (inputs.state) {
      case sails.config.globals.PACKAGE_TOWARDS_DESTINATION:
        valuesToSet = { state: inputs.state, deliveryCost: inputs.cost};
        break;
      case sails.config.globals.PACKAGE_DELIVERED:
        valuesToSet = { state: inputs.state, deliveryTimestamp: inputs.timestamp };
        break;
      case sails.config.globals.PACKAGE_AT_WAREHOUSE:
        valuesToSet = { state: inputs.state, warehouseId: inputs.warehouseId };
        break;
      case sails.config.globals.PACKAGE_AT_MAIN_OFFICE:
        valuesToSet = { state: inputs.state, deliveryCost: inputs.cost };
        break;
      default: return exits.error('error');
    }

    var result = await Package.updateOne({ id: inputs.packageId })
    .set(valuesToSet);

    console.log(result);

    return exits.success('all done');
  }

};

