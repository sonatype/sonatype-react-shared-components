/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const webpack = require('webpack');
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
      publicPath: './'
    },
    resolve: {
      symlinks: false,
      extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    module: {
      rules: [{
        // Loader for compiling TypeScript. Projects which consume RSC only need this if they themselves
        // are written in TypeScript. The RSC package itself is pre-compiled to JS and so does not require
        // this loader in consuming projects.
        test: /\.(t|j)sx?$/,

        // do not pass raw-loaded content through ts-loader
        resourceQuery: /^(?!\?raw$).*/,
        loader: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }, {
        // Loader pipeline for bundling SASS/SCSS stylesheets. As described in the sass-loader documentation, a series
        // of loaders is necessary, as seen below. For downstream projects which do not use sass, and which are instead
        // using the precompiled RSC stylesheet (react-shared-components.css), consider using the webpack null-loader
        // to silently pass over the ES6 imports of scss files present within the RSC codebase.
        test: /\.s?css$/,

        // do not pass raw-loaded content through these loaders
        resourceQuery: /^(?!\?raw$).*/,
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
        test: /\.((t|j)sx?|s?css)$/,

        // do not pass raw-loaded content through these loaders
        resourceQuery: /^(?!\?raw$).*/,
        enforce: 'pre',

        // This loader gets webpack to use sourcemaps included in upstream libraries (like the RSC lib)
        use: ['source-map-loader']
      }, {
        // load any files from the RSC image dir regardless of extension as resources
        include: libImgDir,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]'
        }
      }, {
        // Also load svg and png files as resources. Consuming projects may or may not need a declaration
        // similar to this depending on their own image files and how they include them in the build.
        include: /\.(png|svg|jpg)$/,
        exclude: libImgDir,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]'
        }
      }, {
        // conf for fonts. Separate from the loaders for images because it has a different destination dir.
        // If you want images and fonts to go to the same destination dir, your could combine the file-loader
        // declarations
        test: /\.(ttf|eot|woff2?|svg)$/,
        exclude: libImgDir,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }, {
        // this conf is specific to the RSC gallery, not usage of RSC in general. Consuming projects only need
        // something like this if they want to be able to import contents of certain files as strings
        test: /\.html$/,
        type: 'asset/source'
      }, {
        resourceQuery: /raw/,
        type: 'asset/source'
      }]
    },
    plugins: [

      // Used in conjunction with the MiniCssExtractPlugin.loader to export styles as a separate file rather
      // than bundling them into the JavaScript
      new MiniCssExtractPlugin({
        filename: 'gallery.css'
      }),
      new webpack.EnvironmentPlugin({
        'PX_API_KEY': ''
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
    },
    snapshot: {
      managedPaths: []
    }
  };
};
