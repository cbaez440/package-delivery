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
    operation: {
      type: 'string',
      example: '+',
      description: '',
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {

  	if (inputs.state === sails.config.globals.PACKAGE_TOWARDS_DESTINATION) {
    	
    	await sails.helpers.database.updatePackageInShipping.with({ packageId: inputs.packageId, state: inputs.state, cost: inputs.cost });

  	} else if (inputs.state === sails.config.globals.PACKAGE_DELIVERED) {
  		
  		await sails.helpers.database.updatePackageDelivered.with({ packageId: inputs.packageId, state: inputs.state, timestamp: inputs.timestamp });

  	} else {
  		return exits.error();
  	}
    
    return exits.success();
  }

};

