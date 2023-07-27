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
});
