import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import banner from 'vite-plugin-banner'
import { resolve } from 'path'
import pkg from './package.json'

const bannerText = `Twikoo v${pkg.version}
(c) 2020-${new Date().getFullYear()} iMaeGoo
Released under the MIT License.
Last Update: ${new Date().toLocaleString()}`

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 将默认的 'condense' 改为 'preserve'
          whitespace: 'preserve'
        }
      }
    }),
    banner(bannerText)
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/client/main.all.js'),
      name: 'twikoo',
      formats: ['umd'],
      fileName: () => 'twikoo.all.min.js'
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'twikoo.all.css'
          }
          return assetInfo.name
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      ecma: 5,
      ie8: true,
      safari10: true,
      toplevel: true
    },
    target: 'es2015',
    cssCodeSplit: false,
    emptyOutDir: false,
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/client')
    }
  }
})
