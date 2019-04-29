const webpackMerge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const {version} = require('../package.json')
module.exports = webpackMerge(base, {
    output: {
        filename: `index.js`
    },
    mode: 'production',
    optimization: {
        minimizer: [new UglifyJSPlugin({
                uglifyOptions: {
                    mangleProperties: {
                        ignore_quoted: true, // do not mangle quoted properties and object keys
                    },
                    compress: {
                        properties: false,
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true
                    },
                    output: {
                        beautify: true,
                        quote_keys: true
                    },
                    mangle: {},
                    sourceMap: false,
                    ie8: true,
                    keep_fnames: true
                }

            })]
    }
});
