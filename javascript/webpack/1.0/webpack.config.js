var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:require("./lib/entryFormat")(require('./page')),
    output:{
        path: path.join(__dirname,'dist'),
        publicPath: "/",                //生成文件路径
        filename: "js/[name].js",
        chunkFilename: "js/[id].www.js"
    },
    module: {
        //加载器
        loaders: [    
            {test: /\.css$/, loader:ExtractTextPlugin.extract("style", "css") },
            {
                test: /\.scss$/, 
                exclude: /node_modules/,
                loader:ExtractTextPlugin.extract("style","css!sass")  
            },
            {test: /\.html$/,loader:"html"},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=1024&name=img/[hash].[ext]'}
        ]
    },
    resolve: {
        fallback: [
            path.resolve(__dirname,'./lib')
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            $dxl:path.resolve(__dirname,"./lib/dxl.js"),
            dxlHttp:path.resolve(__dirname,"./lib/constant.js")
        }),
        new ExtractTextPlugin("css/[name].css"),                                        //单独使用style标签加载css并设置其路径
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})              //文件压缩
    ]
};





