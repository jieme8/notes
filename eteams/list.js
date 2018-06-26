//获取部门列表
let request = require("request");
let notesConfig = require("../config/notesConfig");
let ac = require("./access_token");

(async () => {
    try{
        let access_token = await ac();
        let url = `https://api.eteams.cn/department/v1/list?access_token=${access_token}`;

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
                console.log(body.department[0].parent);
                console.log(body.department[1].parent);
                console.log(body.department[2].parent);
                console.log(body.department[3].parent);
                
            }
        });
    }catch(e){
        console.error(e);
    }
})();



