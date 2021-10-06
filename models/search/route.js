import schema0 from './schema';

import body0 from './body';

import data from './data';

async function routes(fastify/* , options */) {
  fastify.route({
    method: ['POST'],
    url: '/search',
    prefix: '/v1',
    constraints: { host: 'localhost' },
    schema: schema0,
    body: body0,
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
