let request = require("request");
let notesConfig = require("../config/notesConfig");
let url = `https://api.eteams.cn/oauth2/access_token`;
let code = require("./code");
// console.log(url);


module.exports = function(){
    return new Promise((resolve, reject) => {
        (async () => {
            try{
                let c = await code();
                request({
                    url: url,
                    method: 'POST',
                    json: true,
                    form:{
                        app_key:notesConfig.eteams.app_key,
                        app_secret:notesConfig.eteams.app_secret,
                        grant_type:"authorization_code",
                        code:c
                    }
                
                },function (err, response, body) {
                    if(err){
                        console.error(err);
                    }else{
                        // console.log(`访问地址：${response.request.uri.href}`);
                        // console.log(`状态吗：${response.statusCode}`);
                        console.log(`token:${body.acessToken}`);
                        return resolve(body.acessToken)
                    }
                });
            }catch(e){
                console.error(e);
            }
        })();
    });
}






