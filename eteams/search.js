let request = require("request");
let notesConfig = require("../config/notesConfig");
let ac = require("./access_token");

var p =  {
    // "pageNo": "1",
    // "pageSize": "15",
    // "orderPropertyName": "name",
    // "asc": "true",
    // "conditions": [
    //     {
    //         "propertyName": "name",
    //         "compareType": "like",
    //         "propertyValue": "tt"
    //     }
    // ]
}

var pp = JSON.stringify(p);


(async () => {
    try{
        let access_token = await ac();
        let url = `https://api.eteams.cn/crm/v1/search?access_token=${access_token}
&userid=L34Qf6f569b5af26285e4d74fad8&module=customer&query=${pp}`;
        console.log(pp);
        console.log(url);

        request({
        url: url,
        method: 'GET',
        json: true,

        },function (err, response, body) {
            if(err){
                console.error(err);
            }else{
                console.log(`访问地址：${response.request.uri.href}`);
                console.log(`状态吗：${response.statusCode}`);
                console.log(body);
                console.log(body.data.data[0]);
            }
        });
    }catch(e){
        console.error(e);
    }
})();



