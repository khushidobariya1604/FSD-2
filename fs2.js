var fs=require("fs");
// fs.mkdirSync("task1");
// fs.writeFileSync("task1/t1.txt","Hello ! Good Morning !");
// fs.appendFileSync("task1/t1.txt","\n Hii....!!");
fs.copyFileSync("task1/t1.txt","task1/t3.txt");
fs.renameSync("task1/t3.txt","task1/new.txt")
// var r=fs.readfileSync("task/new.txt","utf-8")
// console.log(r)