/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');

/**
 * Configuration of a webpack build whose only purpose is to compile a full CSS file of all styles for this library.
 * To avoid duplication of effort, this webpack build traverses through the typescript files to pull in all of the
 * component scss styles.
 */
module.exports = {
  mode: 'production',
  entry: './src/react-shared-components-css.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: ''
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(t|j)sx?$/,
      loader: 'ts-loader',
      include: [path.resolve(__dirname, 'src')],
      options: {
        configFile: path.resolve(__dirname, 'tsconfig.styles.json')
      }
    }, {
      test: /\.s?css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        { loader: 'resolve-url-loader' },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            sassOptions: {
              outputStyle: 'compressed'
            }
          }
        }
      ]
    }, {
      include: [path.resolve(__dirname, 'src/assets')],
      loader: 'file-loader',
      options: {
        context: 'src',
        name: '[name].[ext]',
        outputPath: (url, resourcePath, context) => path.relative(context, resourcePath)
      }
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'react-shared-components.css'
    }),

    // this build is meant to deal with styles only, but webpack is javascript-centric and will output js and .d.ts
    // files anyway, along with corresponding sourcemaps
    new IgnoreEmitPlugin(/\.[jt]s(\.map)?$/)
  ],
  devtool: 'source-map',
  optimization: {
    // disable tree-shaking so we actually get all the css
    sideEffects: false
  }
};
