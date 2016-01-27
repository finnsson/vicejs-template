var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    index: "./index.jsx"
  },
  output: {
    path: "./public",
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    }]
  },
  plugins: [
    new ExtractTextPlugin("./[name].css")
  ]
}
