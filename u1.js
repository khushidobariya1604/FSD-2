var fs=require("fs");
var url=require("url");
var addr="https://www.google.com:8080/about/students?year=2025&t1=22&t2=18&t3=23#example";
var p=url.parse(addr,true);  //true:return query as an object
console.log(p);
process.noDeprecation=true;
var y=p.query.year;
if(y%4==0){
    console.log("leap year")
}else{
    console.log("not a leap year")
}

var q=p.query
fs.writeFileSync("marks.txt",JSON.stringify(q));
var t1=parseInt(q.t1);
var t2=parseInt(q.t2);
var t3=parseInt(q.t3);
var sum=t1+t2+t3;

console.log(sum);

fs.appendFileSync("marks.txt",`\n total marks of ${t1}+${t2}+${t3} is ${sum}`)