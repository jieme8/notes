// d6f197db86aa5217e0592eff533561a9

let request = require("request");
let notesConfig = require("../config/notesConfig.json");
let url = `https://e.lixiaocrm.com/api/v2/custom_fields/customer/by_group`;
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
        console.log('1-----------------------------');
        console.log(body.data.custom_field_groups[0]);
        console.log('2-----------------------------');
        console.log(body.data.custom_field_groups[1]);
        console.log('3-----------------------------');
        console.log(body.data.custom_field_groups[2]);
        console.log('4-----------------------------');
        console.log(body.data.custom_field_groups[3]);

        console.log(body.data.custom_field_groups[2].custom_fields[0].input_field_options);
        

        // console.log(body.data.custom_field_groups[2].custom_fields[8].input_field_options.collection_options);
        

        
    }
});