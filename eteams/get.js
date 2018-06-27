let request = require("request");
let notesConfig = require("../config/notesConfig");



let url = `https://api.eteams.cn/crm/v1/get?access_token=${notesConfig.eteams.access_token}&userid=L34Qf6f569b5af26285e4d74fad8
&module=customer&id=153`;
console.log(url);

request({
   url: url,
   method: 'GET',
   json: true,

},function (err, response, body) {
    if(err){
        console.error(err);
    }else{
        console.log(`访问地址：${response.request.uri.href}`);
        console.log(`状态吗：${response.statusCode}`);
        console.log(body);
        
    }
});