var path = require('path')
var webpack = require('webpack')
const nodemon = require('nodemon');

if (process.argv && process.argv.indexOf('-w') !== -1) {
  nodemon({
    watch: [ 'app/' ],
    ignore: [ 'node_modules/' ],
  }).on('restart', () => {
    console.log('restart');
  });
}

module.exports = {
  entry: {
    main: './app/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  }
}
