const fs=require("fs")

fs.writeFileSync("v.txt","Welome to LJ University  !")
var r=fs.readFileSync("v.txt","utf-8")
let i=0;
let s="aeiouAEIOU"
for(let n=0 ; n<r.length ; n++){
    if(s.includes(r[n])){
        i++;
    }
}
fs.appendFileSync("v.txt",`\n Values in statement is/are = ${i}`);
console.log("Task Compeleted !")