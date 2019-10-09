const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/contact.html",
        filename: "static/pages/contact.html",
        chunks: ["contact"],
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/about.html",
        filename: "static/pages/about.html",
        chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/detail.html",
        filename: "static/pages/detail.html",
        chunks: ["detail"],
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/account.html",
        filename: "static/pages/account.html",
        chunks: ["account"],
    })
]