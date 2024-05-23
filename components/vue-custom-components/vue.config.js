const { defineConfig } = require("@vue/cli-service");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = defineConfig({
  // transpileDependencies: true,
  css: {
    extract: true,
  },
  // chainWebpack: (config) => {
  //   config.module
  //     .rule("fonts")
  //     .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
  //     .use("url-loader")
  //     .loader("url-loader")
  //     .options({
  //       limit: 100000,
  //       name: "fonts/[name].[hash:8].[ext]",
  //     })
  //     .end();
  // },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "src/assets/fonts",
            to: "fonts",
          },
        ],
      }),
    ],
  },
});
