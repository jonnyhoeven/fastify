const createError = require('http-errors');
const schema = require('../schema/branch');
const data = require('../data/branch');

async function routes(fastify/* , options */) {
  fastify.route({
    method: 'GET',
    url: '/branch/:id',
    prefix: '/v1',
    constraints: { host: 'localhost' },
    schema: {
      response: { 200: schema },
    },
    preHandler: (request, reply, done) => {
      if (!request.params.id) reply.send(createError(400, 'Provide ID'));
      done();
    },
    handler(request, reply) {
      if (request.params.id !== 'B22') reply.send(createError(404, 'Not found'));
      reply.send(data);
    }
    ,
  });
}

module.exports = routes;
