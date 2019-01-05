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
		delivery_location:{
			type: 'string',
			required: true
		},
		delivery_date:{
			type: 'string',
			columnType: 'date',
			required: true
		},
		state:{
			type: 'string',
			required: true
		},
		delivery_timestamp:{
			type: 'string',
			columnType: 'datetime',
			required: true
		},
		delivery_cost:{
			type: 'number',
			required: false
		}
	}
};

