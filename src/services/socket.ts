import { io, Socket } from 'socket.io-client';
import { useNotificationStore } from '../lib/store';

class SocketService {
  private socket: Socket | null = null;
  private readonly API_URL = import.meta.env.VITE_API_URL || '/api';

  connect(consultationId: string) {
    if (this.socket) return;

    this.socket = io(this.API_URL, {
      query: { consultationId },
      transports: ['websocket']
    });

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
      useNotificationStore.getState().addNotification(
        'Connection error. Please try reconnecting.',
        'error'
      );
    });

    return this.socket;
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  getSocket() {
    return this.socket;
  }

  emit(event: string, data: any) {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }

  on(event: string, callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  off(event: string, callback?: (data: any) => void) {
    if (this.socket) {
      this.socket.off(event, callback);
    }
  }
}

export const socketService = new SocketService();