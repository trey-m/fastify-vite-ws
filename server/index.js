/**
 * A Fastify plugin that encapsulates the API/server to provide
 * a clean abstraction layer. This plugin connects into the Fastify instance at root.
 */
export default function (server, opts) {
  server.get('/test', (req, reply) => {
    reply.send('OK');
  });
}
