const path = require('path');
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'brique',
      fileName: (format) => `brique.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue',
        }
      }
    }
  },
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './lib')
    },
  },
  plugins: [
    vue(),
  ]
})
