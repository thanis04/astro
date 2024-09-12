import { io, Socket } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:1337';


let socket: Socket;

export function initializeSocket() {
  if (!socket) {
    socket = io(SOCKET_URL, {
      path: '/socket.io',
    });

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    socket.on('product:create', (data) => {
      console.log('Product created:', data);
    });

    socket.on('product:update', (data) => {
      console.log('Product updated:', data);
    });

    socket.on('product:delete', (data) => {
      console.log('Product deleted:', data);
    });
  }
}

export function getSocket() {
  return socket;
}
