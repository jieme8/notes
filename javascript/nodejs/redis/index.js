var redis =require('redis');
// var client = redis.createClient(6379,"192.168.24.150",{
//     auth_pass:'pass'
// });
var client = redis.createClient(6380,"192.168.24.150");
client.on('ready',function(err){
    if(!err){
        console.log('redis连接成功');
        console.log('保存数据:test = 123456');
        client.set('test',"123456",function(err,d){
            if(!err){
                console.log('保存成功');
                console.log('读取数据:test');
                setTimeout(function(){
                    client.get('test',function(err,d){
                        if(!err){
                            console.log('读取成功：' + d);
                        }
                    });
                },500)

            }
        });
        client.expire('test', 1);   //设置过期时间 1秒后过期
    }
});