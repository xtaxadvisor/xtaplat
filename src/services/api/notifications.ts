// notifications.ts

export const addNotification = (message: string, type: 'error' | 'success') => {
    console.log(`[${type.toUpperCase()}] ${message}`);
  };