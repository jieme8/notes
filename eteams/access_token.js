let request = require("request");
let notesConfig = require("../config/notesConfig");
let url = `https://api.eteams.cn/oauth2/access_token`;
console.log(url);
request({
    url: url,
    method: 'POST',
    json: true,
    form:{
        app_key:notesConfig.eteams.app_key,
        app_secret:notesConfig.eteams.app_secret,
        grant_type:"authorization_code",
        code:notesConfig.eteams.code
    }

},function (err, response, body) {
    if(err){
        console.error(err);
    }else{
        console.log(`访问地址：${response.request.uri.href}`);
        console.log(`状态吗：${response.statusCode}`);
        console.log(body);
        
    }
});




