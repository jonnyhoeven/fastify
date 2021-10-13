const contact = require('./contact');
const branch = require('./branch');

module.exports = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    functionName: { type: 'string' },
    subTitle: { type: 'string' },
    intro: { type: 'string' },
    location: { type: 'string' },
    hours: { type: 'string' },
    salary: {
      type: 'object',
      properties: {
        min: { type: 'number' },
        max: { type: 'number' },
        avg: { type: 'number' },
        string: { type: 'string' },
      },
    },
    employmentType: { type: 'string' },
    sector: { type: 'string' },
    educationLevel: { type: 'string' },
    shiftType: { type: 'string' },
    tasks: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    requirements: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    terms: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    contact,
    branch,
  },
};
