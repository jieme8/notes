// d6f197db86aa5217e0592eff533561a9

let request = require("request");
let notesConfig = require("../config/notesConfig.json");
let form = {
    device:"wxwork",
    version_code:"3.13.0",
    user_token:notesConfig.lixiaocrm.user_token
}


//列表
let url = `https://e.lixiaocrm.com/api/v2/contracts`;
let method = "GET"


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
        console.log(body.data.contracts);

    }
});