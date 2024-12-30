1. npm i @types/node -D
   Cấu hình alias và enable source map ở file vite.config.ts
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react-swc'
   import path from 'path'
   // https://vitejs.dev/config/
   export default defineConfig({
   plugins: [react()],
   server: {
   port: 3000
   },
   css: {
   devSourcemap: true
   },
   resolve: {
   alias: {
   '~': path.resolve(\_\_dirname, './src')
   }
   }
   })
