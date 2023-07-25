import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "replace-global",
      transform: function (code) {
        return code.replace("global.", "window.");
      },
    },
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@page": "/src/page",
      "@components": "/src/components",
      "@util": "/src/util",
      "@type": "/src/type",
    },
  },
  server: {
    proxy: {
      "/auth": {
        target: "https://pink-love.shop:8080", // your server endpoint
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, ""),
      },
      "/oauth": {
        target: "https://pink-love.shop:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/oauth/, ""),
      },
      "/register": {
        target: "https://pink-love.shop:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/register/, ""),
      },
      "/api": {
        target: "https://pink-love.shop:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
