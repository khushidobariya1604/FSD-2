var fs=require("fs");
// fs.mkdirSync("task");
// fs.writeFileSync("task/t1.txt","Hello ! Good Morning !");
fs.appendFileSync("task/t1.txt","\n New Data Added.....");
var s=fs.readFileSync("task/t1.txt",'utf-8');
console.log(s);
fs.writeFileSync("task/t2.txt",s);
fs.unlinkSync("task/t1.txt");