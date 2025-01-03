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
      "@assets": path.resolve(__dirname, "./src/assets"), // Alias for assets
      "@styles": path.resolve(__dirname, "./src/styles"), // Alias for styles
    },
  },
  build: {
    sourcemap: process.env.NODE_ENV === "development", // Enable sourcemaps in development
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"], // Core React libraries
          reactQuery: ["@tanstack/react-query"], // React Query for data fetching
          uiLibraries: ["lucide-react"], // UI icons and components
          chartingLibraries: ["chart.js", "react-chartjs-2"], // Charting libraries
        },
      },
    },
    chunkSizeWarningLimit: 1500, // Reduced warning threshold to highlight potential issues
    minify: "terser", // Use Terser for minification
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === "production", // Remove console logs in production
        drop_debugger: process.env.NODE_ENV === "production", // Remove debugger in production
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
    exclude: ["@tanstack/react-query-devtools"], // Exclude development tools
  },
  server: {
    port: 5173, // Use port 5173 for the dev server
    open: true, // Automatically open browser on server start
    strictPort: true, // Ensure the server fails if port 5173 is unavailable
    proxy: {
      "/api": {
        target:
          process.env.VITE_WEB_CONTAINER_URL ||
          "https://xtaplat-mi0z--5173--c8c182a3.local-credentialless.webcontainer.io", // Proxy API requests to WebContainer
        rewrite: (path) => path.replace(/^\/api/, ""), // Rewrite '/api' prefix for proper routing
        changeOrigin: true, // Ensure the proxy modifies the origin header for compatibility
        secure: false, // Disable SSL verification if using self-signed certificates
      },
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV), // Pass environment variables to the client
  },
});