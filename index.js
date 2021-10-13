// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('./route/branch'));
fastify.register(require('./route/contact'));
fastify.register(require('./route/position'));
fastify.register(require('./route/search'));

fastify.listen(3000, (err/* , address */) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
