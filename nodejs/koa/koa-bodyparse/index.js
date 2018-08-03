let Koa = require('koa');
let bodyParser = require('koa-bodyparser')
let app = new Koa();
app.use(bodyParser()); // 解析请求体的中间件
app.use(async (ctx, next) => {
    if (ctx.path === '/' && ctx.method === 'GET') {
        ctx.set('Content-Type', 'text/html;charset=utf8');
        ctx.body = `
        <form action="/" method="post">
            <input type="text" name="username" >
            <input type="text" name="password" >
            <input type="submit" >
        </form>
        `
    }
});
app.use(async (ctx, next) => {
    if (ctx.method === 'POST' && ctx.path === '/') {
        // 获取表单提交过来的数据
        ctx.body = ctx.request.body;
    }
});
app.listen(3000);
