// d6f197db86aa5217e0592eff533561a9
let notesConfig = require("../config/notesConfig.json");
let request = require("request");
let form = {
    device:"wxwork",
    version_code:"3.13.0",
    user_token:notesConfig.lixiaocrm.user_token
}


//列表
// let url = `https://e.lixiaocrm.com/api/v2/leads`;
// let method = "GET"
// form.per_page = 2

//获取单条线索
// let url = `https://e.lixiaocrm.com/api/v2/leads/23758216`;
// let method = "GET"


//创建线索
// let url = `https://e.lixiaocrm.com/api/v2/leads`;
// let method = "POST"
// form.lead = {
//     name:"ddddd",
//     user_id:"426524"
// }


// //更新线索
let url = `https://e.lixiaocrm.com/api/v2/leads/24452903`;
let method = "PUT"
form.lead = {}
// form.lead.name = "bbbbbb";
form.lead.status = "已转客户";
// form.lead.revisit_remind_at = '2018'


// //删除线索
// let url = `https://e.lixiaocrm.com/api/v2/leads/22192155`;
// let method = "DELETE"

console.log(form);
request({
   url: url,
   method: method,
   json: true,
   form:form
},function (err, response, body) {
    if(err){
        console.error(err);
    }else{
        console.log(`状态吗：${response.statusCode}`);
        console.log(body);
        console.log(body.data.leads);

    }
});