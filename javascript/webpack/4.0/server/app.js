var express      	= require('express');				//express
var logger		 	= require('morgan');				//调试
var app          	= express();

console.log(__dirname);
//静态文件配置
app.use(express.static('../dist/'));


//监听端口配置
app.listen(3001, function() {
    console.log('Running node on port :3001');
});