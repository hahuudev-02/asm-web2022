const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        work: resolve(__dirname, 'work.html'),
        workDetail: resolve(__dirname, 'workDetail.html'),
      }
    }
  }
})