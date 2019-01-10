/**
 * PackageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  randomlyGenerate: async function (req, res) {
	    await sails.helpers.init.addRandomPackage();
	    return res.ok();
  }

};

