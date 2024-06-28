const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: '/kh/',
  outputDir: 'dist',
  transpileDependencies: true,
  devServer: {
    open: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:5001',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },

  }
});
