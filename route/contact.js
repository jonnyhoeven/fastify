const createError = require('http-errors');
const schema = require('../schema/contact');
const data = require('../data/contact');

async function routes(fastify/* , options */) {
  fastify.route({
    method: 'GET',
    url: '/contact/:id',
    prefix: '/v1',
    constraints: { host: 'localhost' },
    schema: {
      response: { 200: schema },
    },
    preHandler: (request, reply, done) => {
      console.log(request);
      if (!request.params.id) reply.send(createError(400, 'Provide ID'));
      done();
    },
    handler(request, reply) {
      if (request.params.id !== 'C1178') reply.send(createError(404, 'Not found'));
      reply.send(data);
    },
  });
}

module.exports = routes;
