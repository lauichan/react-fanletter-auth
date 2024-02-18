import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@store", replacement: "/src/store" },
      { find: "@static", replacement: "/src/static" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@shared", replacement: "/src/shared" },
      { find: "@", replacement: "/src" },
    ],
  },
});
