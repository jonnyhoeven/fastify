// expected post body structure
module.exports = {
  type: 'object',
  properties: {
    searchQuery: { type: 'string', nullable: true },
    zipcode: { type: 'string', nullable: true },
    page: { type: 'number', nullable: true },
    categories: { type: 'array', default: [] },
    sectors: { type: 'array', default: [] },
    regions: { type: 'array', default: [] },
    shiftTypes: { type: 'array', default: [] },
    educationLevels: { type: 'array', default: [] },
  },
};
