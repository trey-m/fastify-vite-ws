import { useState, useEffect } from 'react';

export default function useSocket() {
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

  return {
    socket,
    connected
  };
}
