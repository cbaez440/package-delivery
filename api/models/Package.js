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
    deliveryLocation:{
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
      type: 'string',
      columnType: 'datetime',
      required: true
    },
    deliveryCost:{
      type: 'number',
      required: false
    }
  }
};

