// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

fastify.register(require('./models/position/route'))
fastify.register(require('./models/searchParams/route'))

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
})
