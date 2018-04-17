var str = "123456";
var crypto = require("crypto");
var fs = require("fs");

//md5
var md5 = crypto.createHash("md5");
md5.update(str);       

console.log(`md5:${md5.digest("hex")}`);    //以16进制的形式打印md5值

//sha1
var sha1 = crypto.createHash("sha1");
sha1.update(str);           

console.log(`sha1:${sha1.digest("hex")}`);    //以16进制的形式打印sha1值

//sha1 秘钥
// var pem = fs.readFileSync('key.pem');
// var key = pem.toString('ascii');

var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");
console.log(SHA256("Message"));
console.log(CryptoJS.HmacSHA1("Message", "Key"));

