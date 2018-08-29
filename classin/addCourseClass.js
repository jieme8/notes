let url  = 'http://www.eeo.cn/partner/api/course.api.php?action=addCourseClass';
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
    courseId:"4109731",
    className:"测试课节",
    beginTime:"1535429400",
    endTime:"1535430900",
    teacherAccount:"18621371106",
    teacherName:"胡杰",
    folderId:2127461,
    seatNum:4,
    record:1,
    live:1,
    replay:1,
    isHd:0
    

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

