const path = require(`path`);
const { DefinePlugin } = require('webpack');

const IS_DEV = JSON.stringify((process.env.NODE_ENV || 'development') === 'development');
const BASE_URL = JSON.stringify(`https://es31-server.appspot.com/wtw`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
  plugins: [
    new DefinePlugin({
      IS_DEV,
      BASE_URL,
    }),
  ],
};
