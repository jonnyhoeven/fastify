const schema = require('./schema');
const data = require('./data');

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
      // check authentication
      // if(request.params.id !='C1178')
      // reply.send(new Error('no id in url'))
      done();
    },
    handler(request, reply) {
      reply.send(data);
    },
  });
}

module.exports = routes;
