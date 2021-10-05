```shell
curl -X POST -H "Content-Type: application/json" \
-d '{"searchQuery": "", "categories": "3011AA"}' \
127.0.0.1:3000/search
```

/*
fastify.get('/', async (request, reply) => {
return { hello: 'world' }
})

// API route - "Inventory"
fastify.get('/inventory', async (request, reply) => {
return {
request,
hat: 5,
socks: 5,
shirt: 25,
pants: 40
}
})


fastify.route({
method: 'GET',
url: '/test',
schema: {
// request needs to have a querystring with a `name` parameter
querystring: {
name: { type: 'string' }
},
// the response needs to be an object with an `hello` property of type 'string'
response: {
200: {
type: 'object',
properties: {
hello: { type: 'string' }
}
}
}
},
// this function is executed for every request before the handler is executed
preHandler: (request, reply, done) => {
// E.g. check authentication
done()
},
handler: (request, reply) => {
reply.send({ hello: 'world' })
}
})
*/
