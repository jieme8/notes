let request = require("request");
let notesConfig = require("../config/notesConfig");
let url = `https://api.eteams.cn/crm/v1/search?access_token=${notesConfig.eteams.access_token}
&userid=123&module=customer`;
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