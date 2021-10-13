// expected post body structure
module.exports = {
  type: 'object',
  properties: {
    searchParams: {
      type: 'object',
      properties: {
        // Optional whilst zipcode is valid.
        searchQuery: { type: 'string', nullable: true },

        // Optional whilst searQuery is a non empty string.
        zipcode: { type: 'string', nullable: true },

        // Optional, defaults to page 1.
        page: { type: 'number', nullable: true },

        categories: {
          type: 'array',
          default: [],
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
          default: [],
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
          default: [],
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
          default: [],
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
          default: [],
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
  },
};
