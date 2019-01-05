/**
 * Package.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    code:{
      type: 'string',
      required: true
    },
    deliveryAddress:{
      type: 'string',
      required: true
    },
    deliveryDate:{
      type: 'string',
      columnType: 'date',
      required: true
    },
    state:{
      type: 'string',
      required: true
    },
    deliveryTimestamp:{
      type: 'number',
      columnType: 'bigint',
    },
    deliveryCost:{
      type: 'number',
    },
    warehouseId:{
    	model: 'warehouse'
    }
  }
};

