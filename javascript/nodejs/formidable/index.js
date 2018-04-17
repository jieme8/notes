var express      	= require('express');				//express
var compression  	= require('compression');			//gzip压缩
var logger		 	= require('morgan');				//调试
var cookieParser 	= require('cookie-parser');			//cookie
var session 		= require('express-session');		//session
var cookieSession 	= require('cookie-session');
var bodyParser 		= require('body-parser');
var multer 			= require('multer');
var path 		 	= require('path');
var app          	= express();
app.use(compression());//设置gzip压缩
//设置获取post参数 x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    limit:"50mb",   //设置数据的大小
    extended: false //当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型
}));  	
// 设置获取json 
app.use(bodyParser.json({
    limit:"50mb"    //设置数据的大小
})); 							
//app.use(multer()); // for parsing multipart/form-data
app.use(cookieParser('keyboard cat'));
app.use(cookieSession({'secret':'cookie'}));
app.use(session({
    secret: 'recommand 128 bytes random string', 
    cookie: { maxAge: 1440000 },
    saveUninitialized: false,       //是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid
    resave:true						//是指每次请求都重新设置session cookie，假设你的cookie是10分钟过期，每次请求都会再设置10分钟
    //将session 存与mongodb 或 Redis中
    // store: new MongoStore({   			//创建新的mongodb数据库
    // 	host: 'localhost',    			//数据库的地址，本机的话就是127.0.0.1，也可以是网络主机
    // 	port: 27017,          			//数据库的端口号
    // 	db: 'test-app'        			//数据库的名称。
    // })
    // store: new RedisStore({
    // 	host: '127.0.0.1',
    // 	port: 6379,
    // 	db: 'test_session'
    // })
}));
app.use(logger('dev'));	//日志输出

//静态文件配置
app.use(express.static(__dirname + '/public/'));
//默认路由配置
var index = require("./lib/index");
app.use('/upload',index.upload);
//配置404
app.use(function(req, res, next) {
    res.status(404).send('fuck 凸ˋ_ˊ凸');
});
//监听端口配置
app.listen(3001, function() {
    console.log('Running node on port :3001');
});

