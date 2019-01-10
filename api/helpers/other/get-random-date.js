module.exports = {


  friendlyName: 'get random date',

  description: '',


  fn: async function (inputs) {

    //var deliveryDate = new Date(new Date().getTime() + Math.random() * (new Date(2019, 0, 14).getTime() - new Date().getTime()));
    var deliveryDate = new Date(); // For tests

    return deliveryDate;
  }


};

