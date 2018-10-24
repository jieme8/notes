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
                    "name": "胡杰"
                },
                "clueSource": {
                    "name": "网站注册"
                },
                "clueContact": "李四",
                "clueIndustry": {
                    "name": "计算机"
                },
                "clueRegion": {
                    "name": "上海"
                },
                "clueTelephone": "02888888888",
                "cluePhoneNumber": "13888888888",
                "clueSex": "2",
                "clueEmail":"test@qq.com",

                "clueAddress": "莱蒙都会",
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



