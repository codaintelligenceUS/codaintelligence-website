import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import ViteWebp from "vite-plugin-webp-generator";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    (ViteWebp as any).default({ extensions: ["png", "jpg"] }),
    ViteImageOptimizer(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
