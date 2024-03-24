const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',

  bail: true,

  devtool: 'source-map',

  entry: {
    WPlayer: './src/js/index.js',
  },

  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].min.js',
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    publicPath: '/',
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.less'],
    fallback: {
      dgram: false,
      fs: false,
      net: false,
      tls: false,
    },
  },

  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        use: [
          'template-string-optimize-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 40000,
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.art$/,
        loader: 'art-template-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      WPLAYER_VERSION: `"${require('../package.json').version}"`,
    }),
  ],
  resolve: {
    preferRelative: true
  }
};
