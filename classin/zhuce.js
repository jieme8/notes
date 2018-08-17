let url  = 'http://www.eeo.cn/partner/api/course.api.php?action=register';
let request = require("request");
let notesConfig = require("../config/notesConfig");
let crypto = require('crypto');
let md5 = crypto.createHash('md5');
let timeStamp = parseInt(new Date().getTime()/1000);
md5.update( notesConfig.classin.SECRET + timeStamp);
let safeKey = md5.digest('hex');

let form = {
    SID:notesConfig.classin.SID,
    safeKey:safeKey,
    timeStamp:timeStamp,
    telephone:"18611100111",
    nickname:"aaaa",
    password:"123456",

}

console.log(form);


request({
	url: url,
	method: "POST",
    json: true,
    form:form
},function (error, response, body) {
    if(error){
        console.error(err);
    }else{
        console.log(`访问地址：${response.request.uri.href}`);
        console.log(`状态吗：${response.statusCode}`);
        console.log(body);
        
    }
});

