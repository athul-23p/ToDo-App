const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('.','build'),
        filename:'bundle.js'
    },
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  mode:'development'
}