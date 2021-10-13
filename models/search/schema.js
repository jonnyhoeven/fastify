const position = require('../position/schema');

module.exports = {
  type: 'object',
  properties: {
    searchParams: {
      type: 'object',
      properties: {
        // Optional unless zipcode is invalid
        searchQuery: { type: 'string' },
        // Optional unless searchQuery is null or empty
        zipcode: { type: 'string' },
        page: { type: 'number' },
      },

      hits: { total: 'number' },
      categories: {
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
      sectors: {
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
      regions: {
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
      shiftTypes: {
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
      educationLevels: {
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

    results: {
      type: 'object',
      properties: {
        hits: { type: 'number' },
        totalPages: { type: 'number' },
        pageSize: { type: 'number' },
        positions: {
          type: 'array',
          items: position,
        },
      },
    },
  },
};
