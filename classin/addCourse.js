let url  = 'http://www.eeo.cn/partner/api/course.api.php?action=addCourse';
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
    courseName:"测试课程2",

}

console.log(form);


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


// curl --request POST \
//     -F SID="2940964"\
//     -F safeKey="9275717a41fa3bf4d87fec328a7ef0af"\
//     -F timeStamp="1536737809" \
//     -F courseName="标准课 测试" \
//     -F 'Filedata=@/pub/topkid/public/img/pc1.jpg' \
//     --url 'http://www.eeo.cn/partner/api/course.api.php?action=addCourse'