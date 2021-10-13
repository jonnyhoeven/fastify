const position = require('./position');

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
        // Requested page index
        page: { type: 'number' },
        categories: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              filter: { type: 'boolean' },
            },
          },
        },
        sectors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              filter: { type: 'boolean' },
            },
          },
        },
        regions: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              filter: { type: 'boolean' },
            },
          },
        },
        shiftTypes: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              filter: { type: 'boolean' },
            },
          },
        },
        educationLevels: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              filter: { type: 'boolean' },
            },
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
        categories: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              hits: { type: 'number' },
            },
          },
        },
        sectors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              hits: { type: 'number' },
            },
          },
        },
        regions: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              hits: { type: 'number' },
            },
          },
        },
        shiftTypes: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              hits: { type: 'number' },
            },
          },
        },
        educationLevels: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              hits: { type: 'number' },
            },
          },
        },
        positions: {
          type: 'array',
          items: position,
        },
      },
    },
  },
};
