async function routes(fastify, options) {
    fastify.route({
        method: 'GET',
        url: '/position/:id',
        prefix: '/v1',
        constraints: {host: 'localhost'},
        schema: {
            response: require('./schema'),
        },
        preHandler: (request, reply, done) => {
            // E.g. check authentication
            //if(request.params.id ='P053750')
            //reply.send(new Error('no id in url'))
            done()
        },
        handler: function (request, reply) {
            reply.send(require('./data'))
        }
    })
}

module.exports = routes;
