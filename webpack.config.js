const path = require("path");
const webpack = require('webpack');

const JS_DIR = path.resolve(__dirname, './public_html');
const BUILD_DIR = path.resolve(__dirname, './dist');

module.exports = {
    entry: {
        feedback: [`${JS_DIR}/feedback.js`],
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    plugins: []
};