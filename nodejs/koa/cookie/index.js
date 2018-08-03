let Koa = require('koa');
let Router = require('koa-router');
let app = new Koa();
let router = new Router();
router.get('/read', (ctx, next) => {
    //有name读name
    let name = ctx.cookies.get("name") || '没有name';
    let age = ctx.cookies.get("age") || '没有age';
    ctx.body = `${name}-${age}`;
});
router.get('/write', (ctx, next) => {
    ctx.cookies.set('name', 'cgp',{
        domain:'127.0.0.1', //写入cookie所在的域名
        path:'/write',    // 写入cookie最大的路径
        maxAge:10*1000,    //Cookie最大有效时长
        httpOnly:false,  // 是否只用于http请求中获取
        overwrite:false  // 是否允许重写
    });
    ctx.cookies.set('age', '9');
    ctx.body = 'write Ok';
});
app.use(router.routes());
app.listen(4000);

/**
 * Cookie选项

domain：写入cookie所在的域名
path：写入cookie所在的路径
maxAge：Cookie最大有效时长
expires：cookie失效时间
httpOnly:是否只用http请求中获得
overwirte：是否允许重写

 */