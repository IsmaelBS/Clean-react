const path = require('path')

module.exports = {
  mode: 'development',
  entry: 'src/main/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    publicPath: 'public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    reles: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}
