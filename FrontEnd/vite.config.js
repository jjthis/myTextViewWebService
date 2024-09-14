import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/absproxy/3050/",
  plugins: [react()],
  server: {
    proxy: {
      // '/api/': {
      //   target: 'http://100.118.32.1:3050/',
      //   changeOrigin: true,
      //   // rewrite: (path) => path.replace(, ''),
      // },

      // '/admin': {
      //   target: 'http://localhost:8081/'
      // }
    },
    host:true,
    port: 3050,
  },
  resolve: {
    alias: {
      '@':path.resolve(__dirname, '/proxy/3050/'),
    }
  },
})