//获取部门列表
let request = require("request");
let notesConfig = require("../config/notesConfig");
let ac = require("./access_token");

(async () => {
    try{
        let access_token = await ac();
        let url = `https://api.eteams.cn/crm/v1/update?access_token=${access_token}`;

        request({
            url: url,
            method: 'POST',
            json: true,
            form:{
                access_token:access_token,
                corp_id:notesConfig.eteams.corp_id,
                userid:"L34Qf6f569b5af26285e4d74fad8",
                module:"customer",
                entity:{
                    id:"6481981483790252579",
                    name: "上海泛微网络科技股份有限公司1537861669369",
                    manager:{
                        name:"胡杰"
                    },
                    customerStatus:{
                        "name": "已购买"
                    }
                },

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
    }catch(e){
        console.error(e);
    }
})();



