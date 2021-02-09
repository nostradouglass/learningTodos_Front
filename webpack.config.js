const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: "./front/src/app/App.tsx",
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./front/dist/app/"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      //   {
      //     enforce: "pre",
      //     test: /\.js$/,
      //     loader: "source-map-loader",
      //   },
      {
        test: /\.scss$/,
        // exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dev Learning Todos',
      filename: "index.html",
      // Load a custom template (lodash by default)
      template: './front/src/index.html'
    }),
    // new MiniCssExtractPlugin({
    //   filename: "./src/yourfile.css",
    // }),
  ],
};