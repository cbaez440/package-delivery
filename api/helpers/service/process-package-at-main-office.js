module.exports = {


  friendlyName: 'Process one package at main office',


  description: 'processes one package from main office to warehouse',


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
    var warehousesSortedByProximity = await sails.helpers.other.getWarehousesByProximity.with({ destinationAddress: inputs.package.deliveryAddress });

    var nearestWarehouse = warehousesSortedByProximity[0];

    if (!nearestWarehouse.isFull) {
      await sails.helper.database.updatePackage.with({ packageId: inputs.package.id, state: sails.config.globals.PACKAGE_AT_WAREHOUSE, warehouseId: nearestWarehouse.id });
      await sails.helpers.database.updatePackagesAtWarehouse.with({ warehouseId: nearestWarehouse.id, operation: '+' });
      console.log("Package with ID %s sent to nearest warehouse", inputs.package.id)
    } else {

      for (var i = 1; i < warehousesSortedByProximity.length; i++) {
        var nextNearbyWarehouse = warehousesSortedByProximity[i];

        if (nextNearbyWarehouse.isFull) {
          continue;
        } else {
          var distanceNearbyWarehouse = nextNearbyWarehouse.distance;
          distanceNearbyWarehouse = (distanceNearbyWarehouse / 1000).toFixed(3); // kms

          var costFromNearbyWarehouse = distanceNearbyWarehouse / sails.config.globals.KMS_TRAVELED_PER_USD; // USD
          costFromNearbyWarehouse = costFromNearbyWarehouse.toFixed(3);

          var distanceNearestWarehouse = nearestWarehouse.distance;
          distanceNearestWarehouse = (distanceNearestWarehouse / 1000).toFixed(3); // kms
          
          var costFromNearestWarehouse = distanceNearestWarehouse / sails.config.globals.KMS_TRAVELED_PER_USD + sails.globals.PENALTY; // USD
          costFromNearestWarehouse = costFromNearestWarehouse.toFixed(3);

          if (costFromNearestWarehouse < costFromNextNearbyWarehouse) {
            // Is convenient pay the penalty for late delivery and send the package from the nearest warehouse.
            var currentCostPlusPenalty = inputs.package.deliveryCost + sails.globals.PENALTY;
            await sails.helper.database.updatePackage.with({ packageId: inputs.package.id, state: sails.config.globals.PACKAGE_AT_MAIN_OFFICE, cost: currentCostPlusPenalty });
            console.log("Package with ID %s will send to warehouse tomorrow", inputs.package.id)
          } else {
            // Is convenient send the package from nearby city
            await sails.helper.database.updatePackage.with({ packageId: inputs.package.id, state: sails.config.globals.PACKAGE_AT_WAREHOUSE, warehouseId: nextNearbyWarehouse.id });
            await sails.helpers.database.updatePackagesAtWarehouse.with({ warehouseId: nextNearbyWarehouse.id, operation: '+' });
            console.log("Package with ID %s sent to nearby city: %s", inputs.package.id, nextNearbyWarehouse.city)
          }
        }
      }

      // If all warehouses are full, is necessary to pay the penalty for late delivery
      await sails.helper.database.updatePackage.with({ packageId: inputs.package.id, state: sails.config.globals.PACKAGE_AT_MAIN_OFFICE, cost: sails.globals.PENALTY });
      console.log("All warehouses are full. Package with ID %s will send to warehouse tomorrow", inputs.package.id, nextNearbyWarehouse.city)
    }
  }


};

