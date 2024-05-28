import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/blogs/',
  plugins: [
    UnoCSS(),
    VueRouter({
      extensions: ['.vue', '.md'],
      dts: 'src/typed-router.d.ts'
    }),
    vue()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
