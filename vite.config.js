import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Alias for 'src' directory
    },
  },
  define: {
    'process.env': process.env, // Enable use of process.env
  },
  server: {
    port: 5173, // Set the server to run on port 5173
    open: true, // Automatically open browser on server start
  },
});