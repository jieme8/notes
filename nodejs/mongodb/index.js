var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = mongoose.createConnection("mongodb://dbCrm:NE30vFXAZAnY4u9H@10.66.116.135:27017/crm",{ useNewUrlParser: true });

db.on("open", function () { 
    console.log(`—— mongo  连接成功！——`); 
});

let crmListSchema = new mongoose.Schema({
    tableId:String,
    type:String,
    time:Number
});



let crmListModel = db.model("crmlists",crmListSchema);

crmListModel.find({},function(err,d){
    console.log(d);
});

