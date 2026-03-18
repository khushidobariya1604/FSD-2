// PATH MODULE

var p=require("path");
var addr="D:/LJU/node/my.html"
var bn=p.basename(addr);
var dn=p.dirname(addr);
var en=p.extname(addr);

console.log(`Base Name is ${bn} , Directory name is ${dn} , Extension name is ${en}`)