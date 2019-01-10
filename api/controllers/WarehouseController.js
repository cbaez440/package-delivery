/**
 * WarehouseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	init: async function (req, res) {
	    await sails.helpers.init.addDefaultWarehouses();
	    return res.ok();
	},

};

