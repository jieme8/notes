const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("extract-text-webpack-plugin");   //生成html
module.exports = {
    entry:{
        "list":"./src/list/index.js",
        "info":"./src/info/index.js"
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
          // test: /\.xxx$/, // may apply this only for some modules
          options: {
            rules: [
                {
                    test:/\.css$/,
                    loader:'style-loader!css-loader'
                }
            ]
          }
        }),
        //产出html

        new HtmlWebpackPlugin({
            template: "./src/index.html",//模板
            filename:'index.html',
            hash:true,//防止缓存
            minify:{
                removeAttributeQuotes:true//压缩 去掉引号
            }
        })
    ],
    devServer:{//配置此静态文件服务器，可以用来预览打包后项目
        contentBase:path.resolve(__dirname,'dist'),//开发服务运行时的文件根目录
        host:'localhost',//主机地址
        port:9090,//端口号
        compress:true//开发服务器是否启动gzip等压缩
    }
}
