var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'',                  //数据库地址
    user:'',                  //用户名
    password: '',             //密码
    database: '',             //数据库名
    port: 3306                  //端口
});
conn.connect(); //打开数据库
conn.query('show tables',function(err,rows){
    if(err){
        console.error(err);
    }else{
        console.log(rows);
    }
    conn.end(); //关闭数据库
})