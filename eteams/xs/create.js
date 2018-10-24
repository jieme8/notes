//获取部门列表
let request = require("request");
let notesConfig = require("../../config/notesConfig");
let ac = require("../access_token");

(async () => {
    try{
        let access_token = await ac();
        let url = `https://api.eteams.cn/crm/v1/create?access_token=${access_token}`;
        let body = {
            "access_token": access_token,
            "corp_id": notesConfig.eteams.corp_id,
            "userid": "L34Qf6f569b5af26285e4d74fad8",
            "module": "clue",
            "entity": {
                "name": "tt",
                "manager": {
                    "name": "吴昊"
                },
                "clueSource": {
                    "name": "baidu"
                },
                "clueContact": "吴昊",
                "clueIndustry": {
                    "name": "待定"
                },
                "clueRegion": {
                    "name": "上海"
                },
                "clueTelephone": "13799887766",
                "cluePhoneNumber": "13799887766",
                "clueSex": "2",
                "clueEmail":"test@qq.com",

                "clueAddress": "浦东新区",
                "clueFollowStatus": {
                    "name": "客户有意向"
                },
                "clueProcessResult": "成功了",
                "clueDescription": "测试",
                "cluePool": {
                    "name": "测试线索池"
                }
            }
        }
        console.log(url);
        console.log(body);
        request({
            url: url,
            method: 'POST',
            json: true,
            form:body
        },function (err, response, body) {
            if(err){
                console.error(err);
            }else{
                console.log(`状态吗：${response.statusCode}`);
                console.log(body);
            }
        });
    }catch(e){
        console.error(e);
    }
})();



