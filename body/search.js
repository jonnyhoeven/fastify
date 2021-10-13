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

        // Optional
        categories: {
          type: 'array',
          default: [],
          items: {},
        },

        sectors: { type: 'array', default: [] },
        regions: { type: 'array', default: [] },
        shiftTypes: { type: 'array', default: [] },
        educationLevels: { type: 'array', default: [] },
      },
    },
  },
};
