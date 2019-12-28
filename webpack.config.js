const path = require('path');
module.exports = {
    mode: 'development',
    // devtool: 'inline-source-map',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['tsx','.ts', '.js' ],
    },    
    entry: './src/index.ts',
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: true,
        port: 9900
    },
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: 'bundle.js'
    }
};