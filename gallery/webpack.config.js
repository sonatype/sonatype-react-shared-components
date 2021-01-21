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
        // Loader for compiling TypeScript. Projects which consume RSC only need this if they themselves
        // are written in TypeScript. The RSC package itself is pre-compiled to JS and so does not require
        // this loader in consuming projects.
        test: /\.(t|j)sx?$/,
        loader: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src'),

          // the following dependencies use ES6 module syntax (import/export statements). In this build, we handle
          // that syntax with the ts-loader even though these aren't typescript files. Webpack has other ways of
          // handling module syntax either by itself or with babel, for consuming projects which do not use TypeScript.
          path.resolve(__dirname, 'node_modules/fuse.js/'),
          path.resolve(__dirname, 'node_modules/query-string/'),
          path.resolve(__dirname, 'node_modules/split-on-first/'),
          path.resolve(__dirname, 'node_modules/strict-uri-encode/')
        ]
      }, {
        // Loader pipeline for bundling SASS/SCSS stylesheets. As described in the sass-loader documentation, a series
        // of loaders is necessary, as seen below. For downstream projects which do not use sass, and which are instead
        // using the precompiled RSC stylesheet (react-shared-components.css), consider using the webpack null-loader
        // to silently pass over the ES6 imports of scss files present within the RSC codebase.
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
        // use file-loader for any files from the RSC image dir regardless of extension
        include: libImgDir,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }, {
        // also use file-loader for any svg or png files. Consuming projects may or may not need a declaration
        // similar to this depending on their own image files and how they include them in the build.
        include: /\.(png|svg)$/,
        exclude: libImgDir,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }, {
        // loader for fonts. Separate from the loaders for images because it has a different destination dir.
        // If you want images and fonts to go to the same destination dir, your could combine the file-loader
        // declarations
        test: /\.(ttf|eot|woff2?)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }, {
        // this loader is specific to the RSC gallery, not usage of RSC in general. Consuming projects only need
        // something like this if they want to be able to import contents of certain files as strings
        test: /\.html$/,
        loader: 'raw-loader'
      }]
    },
    plugins: [

      // Used in conjunction with the MiniCssExtractPlugin.loader to export styles as a separate file rather
      // than bundling them into the JavaScript
      new MiniCssExtractPlugin({
        filename: 'gallery.css'
      }),
      ...productionPlugins
    ],
    devtool: 'eval-sourcemap',
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
