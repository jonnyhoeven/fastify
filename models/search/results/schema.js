module.exports = {
  200: {
    type: 'object',
    properties: {
      hits: { type: 'number' },
      pages: { type: 'number' },
      positions: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            title: 'string',
            hits: 'number',
            filter: 'boolean',
          },
        },
      },
    },
  },
};
