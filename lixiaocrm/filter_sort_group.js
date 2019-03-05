// d6f197db86aa5217e0592eff533561a9

let request = require("request");
let notesConfig = require("../config/notesConfig.json");
let url = `https://e.lixiaocrm.com/api/v2/leads/filter_sort_group`;
let form = {
    device:"wxwork",
    version_code:"3.13.0",
    user_token:notesConfig.lixiaocrm.user_token

}
//实体名(customer,contact,contract,lead,opportunity,product)
request({
   url: url,
   method: 'GET',
   json: true,
   form:form
},function (err, response, body) {
    if(err){
        console.error(err);
    }else{
        console.log(`状态吗：${response.statusCode}`);
        console.log(body);


        console.log(body.data.sorts);
        

        
    }
});