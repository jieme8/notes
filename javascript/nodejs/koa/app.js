var koa = require('koa');
var path = require('path');
var logger = require('koa-logger');         //日志
var staticServer = require('koa-static');   //静态文件模块
var render = require('koa-ejs');            //ejs
var router = require('koa-router');         //路由

var app = new koa();
var myRouter = new router();


app.use(logger());

// app.use(staticServer(path.join(__dirname,'public')));

app.use(myRouter.routes())
// render(app, {
//   root: path.join(__dirname, 'views'),
//   layout: '__layout',
//   viewExt: 'html',
//   cache: false,
//   debug: true
// });
// app.use(function *(){
//   yield this.render('index',{layout:false});
// });



myRouter.get("/",function *(id,next){
  // yield this.render();
  // yield this.send("123123123")
  console.log('12312312312123123');
  yield this.body = "123123";
})
// app.use(myRouter.routes());

// app.use(async ctx => {
//   // console.log(ctx.query);
//   ctx.cookies.set("aaaaa", "bbbbb")
//   ctx.body = 'Hello World';
// });

// 错误处理
app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});

app.listen(3000);