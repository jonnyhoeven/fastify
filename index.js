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
})
