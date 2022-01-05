import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: { // 配置host
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
      "~": path.join(__dirname, "node_modules")
    }
  }
})
