let Koa = require('koa');
let server = require('koa-static');
let app = new Koa();
app.use(server(__dirname +'/public'));
app.listen(3000);
