import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

<<<<<<< HEAD
// https://vitejs.dev/config/
=======
>>>>>>> b597b98 (Update project files and sync with GitHub)
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
<<<<<<< HEAD
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@services': path.resolve(__dirname, './src/services'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@types': path.resolve(__dirname, './src/types'),
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
=======
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: process.env.NODE_ENV === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-ui': ['lucide-react'],
          'vendor-charts': ['chart.js', 'react-chartjs-2'],
          'vendor-ai': ['openai']
        }
      }
    },
    chunkSizeWarningLimit: 2000
  },
  server: {
    port: 3000
>>>>>>> b597b98 (Update project files and sync with GitHub)
  }
});