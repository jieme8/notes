
//获取线索池
let request = require("request");
let notesConfig = require("../config/notesConfig");
let ac = require("./access_token");

var p =  {
    "asc": "false",
}

var pp = JSON.stringify(p);

(async () => {
    try{
        let access_token = await ac();
        let url = `https://api.eteams.cn/crm/v1/getManagingCluePools?access_token=${access_token}&userid=${notesConfig.eteams.user_id}`;
        console.log(pp);
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
    }catch(e){
        console.error(e);
    }
})();



