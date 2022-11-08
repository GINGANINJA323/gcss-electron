const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { presets: ["@babel/preset-env"]}
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: [".js", ".jsx"]},
    output: {
        path: path.resolve(__dirname, "public/"),
        publicPath: "/public/",
        filename: "bundle.js"
    }
};