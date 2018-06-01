var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var TypedocWebpackPlugin = require('typedoc-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var path = require('path');

var webpack = require('webpack');
var pjson = require('./package.json');

module.exports = {
    entry: "./source/index.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

      plugins: [
        new HtmlWebpackPlugin({
            "title":"Ledger-Alpha "+pjson.version,
            "template":"source/index.ejs",
            "cache": false
        }),
        new DashboardPlugin(),
        new TypedocWebpackPlugin({
            name: "Ledger",
            mode: 'file',
            theme: 'default',
            includeDeclarations: false,
            ignoreCompilerErrors: true,
            out: '../docs'
        }, ['./source'])
        ]
};