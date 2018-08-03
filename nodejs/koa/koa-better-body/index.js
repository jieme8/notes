let Koa = require('koa');
let app = new Koa();
let betterBody = require('koa-better-body'); // v1插件 
let convert = require('koa-convert'); // 将1.0的中间件 转化成2.0中间件
app.use(convert(betterBody({
    uploadDir: __dirname //指定上传的目录 __dirname当前文件夹绝对路径
})))
app.use(async (ctx, next) => {
    if (ctx.path === '/' && ctx.method === 'GET') {
        ctx.set('Content-Type', 'text/html;charset=utf8');
        ctx.body = `
        <form action="/" method="post" enctype="multipart/form-data">
            <input type="text" name="username" autoComplete="off">
            <input type="text" name="password" autoComplete="off">
            <input type="file" name="avatar">
            <input type="submit" >
        </form>
        `
    } else {
        return next();
    }
});
app.use(async (ctx, next) => {
    if (ctx.method === 'POST' && ctx.path === '/') {
        // 获取表单提交过来的数据
        ctx.body = ctx.request.fields;
    }
});
app.listen(3000);
