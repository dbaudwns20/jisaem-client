const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://localhost:50050"
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/style.sass"
          @import "@/assets/sass/grid.sass"
        `
      }
    }
  }
})
