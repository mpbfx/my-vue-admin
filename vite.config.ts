import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
import viteCompression from 'vite-plugin-compression'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      verbose : true,
      threshold: 10240,
      algorithm: 'gzip',
      ext : '.gz',
      deleteOriginFile : false
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[name]'
    }),
    viteMockServe({
      mockPath: 'src/mock',
      enable: process.env.NODE_ENV === 'development'
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
