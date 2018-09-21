
const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
//   ctx.body = 'Hello World';
  ctx.body = {a:1}
});

app.listen(3000); 
