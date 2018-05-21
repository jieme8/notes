var mssql = require('mssql');
var connection = new mssql.Connection({
    user: '',                   //用户名
    password: '',               //密码
    server: '',                 //服务器地址
    database: ''                //数据库名
}, function (err) {
    if (err) {
        console.error(err);
        return false;
    }
    var ps = new mssql.PreparedStatement(connection);
    ps.prepare('select top 10 * from sysobjects', function (err) {
        if (err){
            console.error(err);
            return false;
        }
        ps.execute('', function (err, result) {
            if (err){
                console.log(err);
                return false;
            }
            ps.unprepare(function (err) {
                if (err){
                    console.log(err);
                    return false;
                }
                console.log(result);
            })
        });
    });
});