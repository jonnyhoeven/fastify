async function routes(fastify/* , options */) {
  fastify.route({
    method: 'GET',
    url: '/branch/:id',
    prefix: '/v1',
    constraints: { host: 'localhost' },
    schema: {
      response: require('./schema'),
    },
    preHandler: (request, reply, done) => {
      // check authentication
      // if(request.params.id !='P053750')
      // reply.send(new Error('no id in url'))
      done();
    },
    handler(request, reply) {
      reply.send(require('./data'));
    },
  });
}

module.exports = routes;
