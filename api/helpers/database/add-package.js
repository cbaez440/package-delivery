var moment = require('moment');

module.exports = {


  friendlyName: 'Add package',


  description: '',


  inputs: {
    code: {
      type: 'number',
      example: 145641384,
      description: '',
      required: true
    },
    deliveryAddress: {
      type: 'string',
      example: 'Calle 60 y 4, La Plata, Argentina',
      description: '',
      required: true
    },
    deliveryDate: {
      type: 'string',
      example: '',
      description: '',
      required: true
    },
    state: {
      type: 'string',
      example: 'at main office',
      description: '',
      required: true
    },
    deliveryTimestamp: {
      type: 'number',
      example: 1547091346996,
      description: '',
      required: true
    },
    deliveryCost: {
      type: 'number',
      example: 40,
      description: '',
      required: true
    }
  },


  fn: async function (inputs, exits) {

    var date = moment(inputs.deliveryDate).format('YYYY/MM/DD');

    var initialValues = {
      code: inputs.code, 
      deliveryAddress: inputs.deliveryAddress, 
      deliveryDate: date, 
      state: inputs.state, 
      deliveryTimestamp: inputs.deliveryTimestamp,
      deliveryCost: inputs.deliveryCost
    }

    var result = await Package.create(initialValues);

    return exits.success('all done')
  }


};

