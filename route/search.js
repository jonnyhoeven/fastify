const _ = require('lodash');
const createError = require('http-errors');
const data = require('../data/search');
const schema = require('../schema/search');
const body = require('../body/search');

async function routes(fastify/* , options */) {
  fastify.route({
    method: ['POST'],
    url: '/search',
    prefix: '/v1',
    constraints: { host: 'localhost' },
    schema: { response: { 200: schema } },
    body,
    bodyLimit: 10000,
    preHandler: (request, reply, done) => {
      const { searchParams } = request.body;
      // console.log(JSON.stringify(searchParams, null, 3));
      if (!searchParams.searchQuery && !searchParams.zipcode) reply.send(createError(400, 'SearchQuery and zipcode are empty'));
      done();
    },
    handler(request, reply) {
      const { searchParams } = request.body;
      // if (no results) reply.send(createError(204, 'No search content'));
      reply.send(_.assign(data, { searchParams }));
    },
  });
}

module.exports = routes;
