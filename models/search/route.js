async function routes(fastify/*, options*/) {
    fastify.route({
            method: ['POST'],
            url: '/search',
            prefix: '/v1',
            constraints: {host: 'localhost'},
            schema: require('./schema'),
            body: require('./body'),
            bodyLimit: 10000,
            preHandler: (request, reply, done) => {
                console.log(request.body);
                //if(request.params.id ='P053750')
                done()
            },
            handler: function (request, reply) {
                const data = require('./data');
                reply.send(data)
            }
        }
    )
}

module.exports = routes;
