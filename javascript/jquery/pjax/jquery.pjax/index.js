var express      	= require('express');				//express
var app = express();
//静态文件配置
app.use(express.static(__dirname));

//监听端口配置
app.listen(3001, function() {
    console.log('Running node on port :3001');
});