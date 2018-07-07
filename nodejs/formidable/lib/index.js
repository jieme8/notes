var formidable = require("formidable");
var fs = require("fs");
module.exports = {
    upload:function(req,res){
        let form = new formidable.IncomingForm();
        form.uploadDir = __dirname;

        form.parse(req, function(err, fields, files) {
            if(!err){
                console.log("上传完成");
                let url = __dirname + "/" + fileName() + suffix(files);
                console.log(url);
                if(suffix(files)){
                    console.log(files.img1.path);
                    fs.rename(files.img1.path,`${url}`,function(err,d){
                        if(!err){
                            return resolve(url)
                        }else{
                            console.error(err);
                            return reject(err)
                        }
                    })
                }else{
                    console.error('图片格式不正确');
                    console.error(files);
                    return reject("图片格式不正确");
                }
            }else{
                console.error("error");
            }
        });
        form.on('progress', function(bytesReceived, bytesExpected) {
            console.log(((bytesReceived/bytesExpected)*100).toFixed(2) + "%");
        });
    }
}

function fileName(){
    let d = new Date();
    let yue = d.getMonth() + 1;
    let riqi =  (yue > 9 ? yue : ("0" + yue) + d.getDate());
    return `${d.getFullYear()}${riqi}${d.getTime()}`; 
}

function suffix(img){
    return ".jpg"
    if(img.name.toLowerCase().indexOf(".jpeg") != -1) return ".jpg";
    if(img.name.toLowerCase().indexOf(".jpg") != -1) return ".jpg";
    if(img.name.toLowerCase().indexOf(".png") != -1) return ".png";
    if(img.name.toLowerCase().indexOf(".gif") != -1) return ".gif";    
    return false;
}
