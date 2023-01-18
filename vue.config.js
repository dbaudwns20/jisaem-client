const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // cors 오류 방지
  devServer: {
    proxy : 'http://localhost:50051'
  }
})
