let Koa = require('koa');
let app = new Koa();
let views = require('koa-views');
app.use(views(__dirname,{
    extension:'ejs' //指定用ejs模板
}));
app.use(async (ctx,next)=>{
    // 渲染index.ejs
    await ctx.render('index',{name:'cgp',age:9,arr:[1,2,3]});
});
app.listen(3000);

