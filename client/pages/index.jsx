import { useState, useEffect } from 'react';

export function getMeta() {
  return {
    title: 'Welcome to @fastify/react!'
  };
}

export default function Index() {
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000/ws');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
      setConnected(true);
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      console.log('Message from server: ', event.data);
      setMessage(event.data);
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
      setConnected(false);
    };

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && connected) {
      socket.send('testing');
    }
  };

  return (
    <div>
      <h1>WebSocket React Example</h1>
      <p>Connection Status: {connected ? 'Connected' : 'Disconnected'}</p>
      <p>Last Message from Server: {message}</p>
      <button onClick={sendMessage} disabled={!connected}>
        Send Message to Server
      </button>
    </div>
  );
}
