// @ts-check
const { ESBuildPlugin } = require("esbuild-loader");

/** @type {import('webpack').Configuration} */
const config = {
  entry: "./src/index.ts",
  mode: "production",
  target: "webworker",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "esbuild-loader",
        options: {
          loader: "ts",
          // TODO // update to es2020 when @cloudflare/wrangler
          // TODO // is updated to webpack5
          // TODO // (https://github.com/cloudflare/wrangler/issues/1678#issuecomment-744370463)
          // TODO // or to support custom build
          // TODO // (https://github.com/cloudflare/wrangler/pull/1677)
          target: "es2019",
        },
      },
    ],
  },
  plugins: [new ESBuildPlugin()],
  optimization: {
    minimize: false,
  },
};

module.exports = config;
