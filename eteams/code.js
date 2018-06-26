let request = require("request");
let notesConfig = require("../config/notesConfig");
let url = `https://api.eteams.cn/oauth2/authorize?corpid=${notesConfig.eteams.corp_id}&response_type=code&redirect_uri=https://topkid.cn/api/crm`;
// console.log(url);

module.exports = function(){
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: 'GET',
            json: true,
         
         },function (err, response, body) {
             if(err){
                 console.error(err);
             }else{
                //  console.log(`访问地址：${response.request.uri.href}`);
                //  console.log(`状态吗：${response.statusCode}`);
                 console.log(`code:${body.code}`);
                return resolve(body.code)

             }
         });
    });
}
