const data = require('./data');
const schema = require('./schema');
const body = require('./body');

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
      console.log(request.body);
      // if(request.params.id ='P053750')
      done();
    },
    handler(request, reply) {
      reply.send(data);
    },
  });
}

module.exports = routes;
