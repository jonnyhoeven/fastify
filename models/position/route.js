import schema0 from './schema';

import data from './data';

async function routes(fastify/* , options */) {
  fastify.route({
    method: 'GET',
    url: '/position/:id',
    prefix: '/v1',
    constraints: { host: 'localhost' },
    schema: {
      response: schema0,
    },
    preHandler: (request, reply, done) => {
      // check authentication
      // if(request.params.id !='P053750')
      // reply.send(new Error('no id in url'))
      done();
    },
    handler(request, reply) {
      reply.send(data);
    },
  });
}

module.exports = routes;
