module.exports = {
  200: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      street: { type: 'string' },
      zipcode: { type: 'string' },
      city: { type: 'string' },
      geolocation: { type: 'string' },
    },
  },
};
