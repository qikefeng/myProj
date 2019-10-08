
const path = require("path");
const entry = require("./entry.config");
const rules = require("./loader.config");
const plugins = require("./plugin.config");

module.exports = {
    context: path.resolve(__dirname, '../'),
    "mode": "development",
    entry,
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "static/js/[name]-[hash:5].js",
        publicPath: "http://127.0.0.1:8082/"
    },
    module: {rules},
    plugins,
    devServer: {
        contentBase:path.resolve(__dirname,"../dist/"),
        host: "127.0.0.1",
        port: 8082,
        open: true,
        inline: true,
        hot: true
    },
    

}