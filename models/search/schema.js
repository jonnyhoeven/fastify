import results0 from './results/schema';

module.exports = {
  200: {
    type: 'object',
    properties: {
      searchParams: {
        searchQuery: { type: 'string' },
        zipcode: { type: 'string' },
        page: { type: 'number' },
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
      results: results0,
    },
  },
};
