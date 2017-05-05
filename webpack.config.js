var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ["./src/index.tsx"]
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: "bundle.js",
        publicPath: "/public/"
    },
    module: {

        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
    ],
    devServer: {
        historyApiFallback: true,
        open: true, // to open the local server in browser
        contentBase: __dirname + '/public',

    },
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
};