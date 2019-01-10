module.exports = {


  friendlyName: 'Add warehouse',


  description: '',


  inputs: {
    name: {
      type: 'string',
      example: 'WH00',
      description: '',
      required: true
    },
    city: {
      type: 'string',
      example: 'La Plata, Argentina',
      description: '',
      required: true
    },
    limit: {
      type: 'number',
      example: 100,
      description: '',
      required: true
    },
    full: {
      type: 'boolean',
      example: true,
      description: '',
      required: true
    },
    packages: {
      type: 'number',
      example: 0,
      description: '',
      required: true
    }
  },


  fn: async function (inputs, exits) {
    var initialValues = {
      name: inputs.name,
      city: inputs.city,
      limit: inputs.limit,
      full: inputs.full,
      packages: inputs.packages
    }

    var result = await Warehouse.create(initialValues);

    return exits.success('all done')
  }


};

