import Fastify from 'fastify';
import FastifyVite from '@fastify/vite';
import FastifyWebsocket from '@fastify/websocket';
import API from './server/index.js';

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

server.register(API);

await server.listen({ port: 3000 });
