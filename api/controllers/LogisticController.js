/**
 * LogisticController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  sendPackagesToWarehouse: async function (req, res) {
    await sails.helpers.service.processAllPackagesAtMainOffice();
    return res.ok();
  },

  sendPackagesToDestination: async function (req, res) {
    await sails.helpers.service.processAllPackagesAtWarehouse();
    return res.ok();
  }
};

