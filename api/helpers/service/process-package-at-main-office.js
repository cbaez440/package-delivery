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


  fn: async function (inputs, exits) {
    
    var warehousesSortedByProximity = await sails.helpers.other.getWarehousesByProximity.with({ destinationAddress: inputs.package.deliveryAddress });

    var nearestWarehouse = warehousesSortedByProximity[0];

    console.log("Nearest warehouse: %s", JSON.stringify(nearestWarehouse))

    if (!nearestWarehouse.full) {
      await sails.helpers.database.updatePackage.with({ packageId: inputs.package.id, state: sails.config.globals.PACKAGE_AT_WAREHOUSE, warehouseId: nearestWarehouse.id });
      await sails.helpers.database.updatePackagesAtWarehouse.with({ warehouseId: nearestWarehouse.id, operation: '+' });
      console.log("Package with ID %s sent to nearest warehouse", inputs.package.id)

    } else {

      for (var i = 1; i < warehousesSortedByProximity.length; i++) {
        var nextNearbyWarehouse = warehousesSortedByProximity[i];

        if (nextNearbyWarehouse.full) {
          continue;
        } else {
          console.log("Next nearby warehouse: %s", JSON.stringify(nextNearbyWarehouse))

          // Distance from nearest warehouse
          var distanceNearestWarehouse = nearestWarehouse.distance;
          distanceNearestWarehouse = (distanceNearestWarehouse / 1000).toFixed(3); // kms
          console.log("Distance from nearest warehouse: %s", distanceNearestWarehouse)
          
          // Cost to send the package from nearest warehouse (with penalty)
          var costFromNearestWarehouse = distanceNearestWarehouse / sails.config.globals.KMS_TRAVELED_PER_USD + sails.config.globals.PENALTY; // USD
          costFromNearestWarehouse = costFromNearestWarehouse.toFixed(3);
          console.log("Cost to send the package from nearest warehouse (with penalty): %s", costFromNearestWarehouse)

          // Distance from nearby warehouse
          var distanceNearbyWarehouse = nextNearbyWarehouse.distance;
          distanceNearbyWarehouse = (distanceNearbyWarehouse / 1000).toFixed(3); // kms
          console.log("Distance from nearby warehouse: %s", distanceNearbyWarehouse)

          // Cost to send the package from nearby warehouse (without penalty)
          var costFromNearbyWarehouse = distanceNearbyWarehouse / sails.config.globals.KMS_TRAVELED_PER_USD; // USD
          costFromNearbyWarehouse = costFromNearbyWarehouse.toFixed(3);
          console.log("Cost to send the package from nearby warehouse (without penalty): %s", costFromNearbyWarehouse)

          if (costFromNearestWarehouse < costFromNearbyWarehouse) {

            // Is convenient pay the penalty for late delivery and send the package from nearest warehouse.
            var currentCostPlusPenalty = inputs.package.deliveryCost + sails.config.globals.PENALTY;
            await sails.helpers.database.updatePackage.with({ packageId: inputs.package.id, state: sails.config.globals.PACKAGE_AT_MAIN_OFFICE, cost: currentCostPlusPenalty });
            console.log("Package with ID %s will send to warehouse tomorrow", inputs.package.id)

          } else {

            // Is convenient send the package from nearby city
            await sails.helpers.database.updatePackage.with({ packageId: inputs.package.id, state: sails.config.globals.PACKAGE_AT_WAREHOUSE, warehouseId: nextNearbyWarehouse.id });
            await sails.helpers.database.updatePackagesAtWarehouse.with({ warehouseId: nextNearbyWarehouse.id, operation: '+' });
            console.log("Package with ID %s sent to nearby city: %s", inputs.package.id, nextNearbyWarehouse.city)
          }

          return exits.success();
        }
      }

      // If all warehouses are full, is necessary to pay the penalty for late delivery
      var currentCostPlusPenalty = inputs.package.deliveryCost + sails.config.globals.PENALTY;
      await sails.helpers.database.updatePackage.with({ packageId: inputs.package.id, state: sails.config.globals.PACKAGE_AT_MAIN_OFFICE, cost: currentCostPlusPenalty });
      console.log("All warehouses are full. Package with ID %s will send to warehouse tomorrow", inputs.package.id, nextNearbyWarehouse.city)
      
      return exits.success();
    }
  }


};
