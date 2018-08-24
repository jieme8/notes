let url1 = `https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=ww81cc482c42c0b7df&corpsecret=ISjbPBcTI7ZLJIb-kqJkY5A8B6Ka7GgYoT5UYbCDDW8`;

let url2  = 'https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=916jxk5lyydvsqmN_rFtS8d3eb2DAf4Q04DrUcR2XZt4rYWRHzVZiHARL8CFnejmY0FGRnlXcZiDrmj4RjlfMq2YUjSwlVo1Oqf45SuBCuex8_Cx0dcEZ_3TLK3iOH0ZW57JhN7pFvEmEkuXwxHI7gl3F8R6mL9ejp8de9ev2HBfnqefdzthxd5LizzDnr7azu85M9NEL63ru3vDnOEIEQ&userid=qy0162a1fd7853f70329acd677bb';
let request = require("request");
let notesConfig = require("../config/notesConfig");
let crypto = require('crypto');
let md5 = crypto.createHash('md5');
let timeStamp = parseInt(new Date().getTime()/1000);
// md5.update( notesConfig.classin.SECRET + timeStamp);
// let safeKey = md5.digest('hex');

let form = {
    corpid:"ww81cc482c42c0b7df",
    corpsecret:"ISjbPBcTI7ZLJIb-kqJkY5A8B6Ka7GgYoT5UYbCDDW8",

}

// console.log(form);

request({
	url: url2,
	method: "GET",
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

// request({
// 	url: url,
// 	method: "POST",
//     json: true,
//     form:form
// },function (error, response, body) {
//     if(error){
//         console.error(err);
//     }else{
//         console.log(`访问地址：${response.request.uri.href}`);
//         console.log(`状态吗：${response.statusCode}`);
//         console.log(body);
        
//     }
// });

