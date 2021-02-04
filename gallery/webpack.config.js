/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyModulesPlugin = require('copy-modules-webpack-plugin');

const libImgDir = path.resolve(__dirname, 'node_modules/@sonatype/react-shared-components/assets/img');

module.exports = function(env = { production: false }) {
  const productionPlugins = env.production ? [
    new CopyModulesPlugin({
      destination: 'webpack-modules',
      includePackageJsons: true
    })
  ] : [];

  return {
    mode: 'development',
    context: path.resolve(__dirname, 'src/'),
    entry: './main.tsx',
    output: {
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      symlinks: false,
      extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    module: {
      rules: [{
        test: /\.(t|j)sx?$/,
        loader: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/fuse.js/'),
          path.resolve(__dirname, 'node_modules/query-string/'),
          path.resolve(__dirname, 'node_modules/split-on-first/'),
          path.resolve(__dirname, 'node_modules/strict-uri-encode/')
        ]
      }, {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'resolve-url-loader' },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        include: libImgDir,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]'
        }
      }, {
        include: /\.png$/,
        exclude: libImgDir,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]'
        }
      }, {
        test: /\.(ttf|eot|woff2?|svg)$/,
        exclude: libImgDir,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }, {
        test: /\.html$/,
        loader: 'raw-loader',
        type: 'asset/source'
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'gallery.css'
      }),
      ...productionPlugins
    ],
    devtool: 'eval-source-map',
    devServer: {
      port: 4043,
      host: '0.0.0.0',

      // needed for browserstack testing with Safari to work. Not considered a security risk because nothing
      // served here is sensitive and there is no server-side state to be at risk of changing.
      disableHostCheck: true,
      publicPath: '/',
      contentBase: path.join(__dirname, 'src')
    }
  };
};
