module.exports = {
    type: 'object',
    properties: {
        searchQuery: {type: 'string', nullable: true},
        zipcode: {type: 'string', nullable: true},
        page: {type: 'number', nullable: true},
        categories: {type: 'array', default: []}
    }
}
