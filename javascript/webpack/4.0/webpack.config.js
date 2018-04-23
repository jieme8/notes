const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");   //生成html
const ExtractTextWebapckPlugin = require("extract-text-webpack-plugin"); //css单独文件
module.exports = {
    entry:{
        "list":"./src/index/index.js",
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                // loader:'style-loader!css-loader'
                use:ExtractTextWebapckPlugin.extract({
                    use:['css-loader']
                })//不再需要style-loader
            },
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ["env", "stage-0"]
                    }
                }
            }
        ]
    },
    plugins: [

        //css文件分离
        new ExtractTextWebapckPlugin('[name].css'),
        // 产出html
        new HtmlWebpackPlugin({
            template: "./src/index/index.html",//模板
            filename:'index.html',
            // chunks:['index'],
            hash:true,//防止缓存
            minify:{
                removeAttributeQuotes:true//压缩 去掉引号
            }
        })
        
    ],
    resolve : {
        modules : [
            path.resolve(__dirname, "./lib")
        ]
    },
    devServer:{//配置此静态文件服务器，可以用来预览打包后项目
        contentBase:path.resolve(__dirname,'dist'),//开发服务运行时的文件根目录
        host:'localhost',//主机地址
        port:9090,//端口号
        compress:true//开发服务器是否启动gzip等压缩
    }
}
