import Fastify from 'fastify';
import FastifyVite from '@fastify/vite';
import FastifyWebsocket from '@fastify/websocket';

const server = Fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger'
    }
  }
});

server.register(FastifyWebsocket);

await server.register(FastifyVite, {
  root: import.meta.url,
  renderer: '@fastify/react'
});

await server.vite.ready();

server.get('/ws', { websocket: true }, (socket /* WebSocket */, req /* FastifyRequest */) => {
  socket.on('message', (message) => {
    socket.send('hi from server');
  });
});

await server.listen({ port: 3000 });
