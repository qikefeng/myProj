const HtmlConfig = require("./html.plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin  = require("optimize-css-assets-webpack-plugin")

module.exports = [
    ...HtmlConfig,
    new CleanWebpackPlugin(),
    new ExtractTextPlugin("static/css/[name]-[hash:5].css"),
    new webpack.ProvidePlugin({
        $:"jquery"
    }),
    new webpack.BannerPlugin("版权所有pepper"),
    new webpack.HotModuleReplacementPlugin(),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
    }),
]