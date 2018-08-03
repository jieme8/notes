
//通过/arcicle/id/name传参
let Koa = require('koa');
let app = new Koa();
let Router = require('koa-router');
let router = new Router();
//实现  /arcicle/id/name形式的传参
router.get('/acticle/:id/:name',(ctx,next)=>{
    ctx.body = ctx.params.id +"-"+ ctx.params.name;
});
app.use(router.routes());
app.listen(3000);
