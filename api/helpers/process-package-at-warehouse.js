module.exports = {


  friendlyName: 'Process one package at warehouse',

  description: 'processes one package from warehouse to destination',

  inputs: {
    package: {
      type: {},
      example: {},
      description: '',
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {

  	// Get the warehouse's city of a package
    var warehouse = await sails.helpers.getWarehouse.with({ warehouseId: inputs.package.warehouseId });
    var warehouseLocation = warehouse[0].city;
    var customerAddress = inputs.package.deliveryAddress;
    console.log('Warehouse location: %s', warehouseLocation);

    // Get the distance between the warehouse and the customer address
    var distance = await sails.helpers.getDistance.with({ origin: warehouseLocation, destination: customerAddress }); // meters
    distance = (distance / 1000).toFixed(3); // kms
    console.log('Distance: %s', distance);

    // Get the cost of delivery from the distance and the current cost
    var cost = inputs.package.deliveryCost + distance / sails.config.globals.KMS_TRAVELED_PER_USD; // USD
    cost = cost.toFixed(3);
    console.log('Cost: %s', cost);

    // Set the package's state
    var newState = sails.config.globals.PACKAGE_TOWARDS_DESTINATION;
    console.log('New state: %s', newState);

    // Update the database with the package's new attributes
    var result = await sails.helpers.updatePackageInShipping.with({ packageId: inputs.package.id, state: newState, cost: cost });
    console.log(result);

    // How the package is going to the destination address, you simulate the passage of time. For the exersize, you assume that 1 second is 1 hour.
    await sails.helpers.simulateDeliveryTime();

    // The package reaches its destination
    // TODO get timestamp and state of the delivery
    var timestamp = new Date().getTime();
    newState = await sails.helpers.getPackageState();

    console.log("Timestamp: %s", timestamp);
    console.log("New state: %s", newState);
    // TODO update database: package and warehouse

    result = await.sails.helpers.updatePackageDelivered.with({ packageId: pack.id, state: newState, timestamp: timestamp })
    console.log(result);
    
  }


};

