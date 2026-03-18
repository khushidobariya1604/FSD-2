// Asynchronous file system (fs)

var fs=require("fs");
fs.writeFileSync("temp.txt","Good Morning....");
console.log("Sync operation done !");
fs.writeFile("temp1.txt","hii",(e)=>{
    if(e){throw e;}
    else(console.log("Async operation done !"))
})
console.log("last line");