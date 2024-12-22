<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = require("@vitejs/plugin-react");
const path_1 = require("path");
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    resolve: {
        alias: {
            '@': path_1.default.resolve(__dirname, './src'),
            '@components': path_1.default.resolve(__dirname, './src/components'),
            '@pages': path_1.default.resolve(__dirname, './src/pages'),
            '@utils': path_1.default.resolve(__dirname, './src/utils'),
            '@services': path_1.default.resolve(__dirname, './src/services'),
            '@hooks': path_1.default.resolve(__dirname, './src/hooks'),
            '@contexts': path_1.default.resolve(__dirname, './src/contexts'),
            '@types': path_1.default.resolve(__dirname, './src/types'),
        },
    },
    build: {
        // Only generate sourcemaps in development
        sourcemap: process.env.NODE_ENV === 'development',
        // Optimize chunk splitting
        rollupOptions: {
            output: {
                manualChunks: {
                    // Split vendor chunks more granularly
                    'vendor-react': ['react', 'react-dom', 'react-router-dom'],
                    'vendor-query': ['@tanstack/react-query'],
                    'vendor-ui': ['lucide-react'],
                    'vendor-charts': ['chart.js', 'react-chartjs-2']
                }
            }
        },
        // Increase chunk size limit to avoid warnings
        chunkSizeWarningLimit: 2000,
        // Enable minification optimizations
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    },
    // Pre-bundle these dependencies
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            'react-router-dom',
            '@tanstack/react-query'
        ],
        // Exclude dev-only dependencies
        exclude: ['@tanstack/react-query-devtools']
    },
    server: {
        port: 3000,
        proxy: {
            '/.netlify/functions': {
                target: 'http://localhost:8888',
                changeOrigin: true,
                secure: false
            }
        }
    }
});
=======
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
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
