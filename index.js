// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('./routes/branch'));
fastify.register(require('./routes/contact'));
fastify.register(require('./routes/position'));
fastify.register(require('./routes/search'));

fastify.listen(3000, (err/* , address */) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
