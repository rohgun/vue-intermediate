const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProgressPlugin() // ✅ Webpack 내장 플러그인
    ]
  }
};
