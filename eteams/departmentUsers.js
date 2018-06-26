//获取部门成员列表
let request = require("request");
let notesConfig = require("../config/notesConfig");
let ac = require("./access_token");

(async () => {
    try{
        let access_token = await ac();
        let url = `https://api.eteams.cn/user/v1/departmentUsers?status=normal&depid=4531676596934195868&fetch_child=1&access_token=${access_token}`;

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



