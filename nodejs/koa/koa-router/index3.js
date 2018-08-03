//通过/arcicle?id=1&name=cgp传参

const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
router.get('/article', function (ctx, next) {
    ctx.body=ctx.query; //query方法实现json形式
});
app.use(router.routes())
app.listen(3000,()=>{
    console.log('starting at port 3000');
});

