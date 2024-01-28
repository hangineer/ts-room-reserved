import { fileURLToPath, URL } from 'node:url';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ts-room-reserved/',
  plugins: [
    vue(),
    UnoCSS({
      configFile: './uno.config.ts'
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
