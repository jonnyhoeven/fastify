// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});
fastify.register(require('./models/branch/route'));
fastify.register(require('./models/contact/route'));
fastify.register(require('./models/position/route'));
fastify.register(require('./models/search/route'));

fastify.listen(3000, (err/* , address */) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
