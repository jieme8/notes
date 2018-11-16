
var xlsx = require("node-xlsx");
var list = xlsx.parse("./1.xlsx");
// console.log(list);
for(let i = 0 ;i<list[0].data.length;i++){
    console.log(list[0].data[i]);
}

