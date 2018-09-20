const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (storybookBaseConfig) => {

  storybookBaseConfig.module.rules.push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      emitError: true,
      emitWarning: true,
      failOnWarning: false,
      failOnError: true
    }
  });

  storybookBaseConfig.module.rules.push({
    test: /\.(png|jpeg|jpg|svg|gif)$/,
    loader: 'file-loader?name=images/[name].[ext]',
  });

  return storybookBaseConfig;
};
