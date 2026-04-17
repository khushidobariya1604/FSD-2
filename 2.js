var express=require("express");
var app=new express();
var path=require("path")
var sp=path.join(__dirname,"../frontend");
// 3 
// app.use(express.static(sp,{index:"2.html"}))
app.use(express.static(sp));
app.get("/",(req,res)=>{
    res.sendFile(sp+"/2.html");
})
app.listen(7000);

//1.
var express=require("express");
var app=new express();

app.use(express.static(__dirname))
app.listen(7000);


//2.
var express=require("express");
var app=new express();

app.use(express.static("frontend",{index:"1.html"}))
app.listen(8000);