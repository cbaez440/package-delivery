/**
 * Warehouse.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type: 'string',
      required: true
    },
    city:{
      type: 'string',
      required: true
    },
    limit:{
      type: 'number',
      required: true
    },
    packages:{
      type: 'number',
      required: false
    },
    full: {
      type: 'boolean'
    }
  }
};

