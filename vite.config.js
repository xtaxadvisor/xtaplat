import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for 'src' directory
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
  build: {
    sourcemap: process.env.NODE_ENV === "development", // Enable sourcemaps in development
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-query": ["@tanstack/react-query"],
          "vendor-ui": ["lucide-react"],
          "vendor-charts": ["chart.js", "react-chartjs-2"],
        },
      },
    },
    chunkSizeWarningLimit: 2000, // Avoid chunk size warnings
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true, // Remove debugger statements in production
      },
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@tanstack/react-query",
    ],
    exclude: ["@tanstack/react-query-devtools"], // Exclude dev-only dependencies
  },
  server: {
    port: 5173, // Set server to run on port 5173
    open: true, // Automatically open browser on server start
    proxy: {
      "/.netlify/functions": {
        target: "http://localhost:8888", // Proxy API calls during local development
        changeOrigin: true,
        secure: false,
      },
    },
  },
});