// d6f197db86aa5217e0592eff533561a9
let notesConfig = require("../config/notesConfig.json");
let request = require("request");
let form = {
    device:"wxwork",
    version_code:"3.13.0",
    user_token:notesConfig.lixiaocrm.user_token
}


//列表
let url = `https://e.lixiaocrm.com/api/v2/customers`;
let method = "GET"
form.per_page = 50
form.page = 30

//获取单条客户
// let url = `https://e.lixiaocrm.com/api/v2/customers/23609666`;
// let method = "GET"


//创建客户
// let url = `https://e.lixiaocrm.com/api/v2/leads`;
// let method = "POST"
// form.lead = {
//     name:"ddddd",
//     user_id:"426524"
// }


//更新客户
// let url = `https://e.lixiaocrm.com/api/v2/customers/23609666`;
// let method = "PUT"
// form.customer = {}
// form.customer.address_attributes = {}
// form.customer.user = {}
// form.customer.text_asset_b7bca6 = "已分配2"
// form.customer.user_id = 439894123123

// form.customer.name = "bbbbbb";
// form.customer.address_attributes.phone = "18911111111";


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

    }
});