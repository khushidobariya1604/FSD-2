// File System Module (Fs)

var fs=require("fs");
fs.writeFileSync("b6.txt","Welcome Students !!");
// fs.mkdirSync("myfolder")
// fs.rmdirSync("myfolder")
var r=fs.readFileSync("b6.txt");
console.log(r);
console.log(r.toString());
fs.appendFileSync("b6.txt","\n Node JS File Sysytem")
var r1=fs.readFileSync("b6.txt","utf-8")
console.log(r1)

fs.unlinkSync("b6.txt")
console.log("Compeleted !!")