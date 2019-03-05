let request = require("request");
let notesConfig = require("../config/notesConfig.json");
let url = `https://e.lixiaocrm.com/api/v2/auth/login`;
let form = {
    device:"wxwork",
    version_code:"3.13.0",
    login:"",
    password:""
}
request({
   url: url,
   method: 'POST',
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