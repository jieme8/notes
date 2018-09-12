//更换老师
let url  = 'http://www.eeo.cn/partner/api/cloud.api.php?action=uploadFile';
let request = require("request");
let notesConfig = require("../config/notesConfig");
let crypto = require('crypto');
let md5 = crypto.createHash('md5');
let timeStamp = parseInt(new Date().getTime()/1000);
md5.update( notesConfig.classin.SECRET + timeStamp);
let safeKey = md5.digest('hex');
let child_process = require("child_process");



    let form = {
        SID:notesConfig.classin.SID,
        safeKey:safeKey,
        timeStamp:timeStamp,
        folderId:"2127461",
        Filedata:"/Users/hujie/Pictures/1-01.jpg"
    
    }
    console.log(form);

    classInCurl(url,form)
    function classInCurl(url,from){
        return new Promise((resolve, reject) => {
            child_process.exec(`
                curl  -F "SID=${from.SID}" \
                -F "safeKey=${from.safeKey}" \
                -F "timeStamp=${from.timeStamp}" \
                -F "folderId=${from.folderId}" \
                -F "Filedata=@${from.Filedata}" \
                "${url}"
            `, function(err,d){
                if(err){
                    console.error(err);
                }else{
                    console.log(d);
                    return resolve(d)
                }
                
            }) 
        
        });
    }
    









