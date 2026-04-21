var express=require("express");
var app=express();

var cp=require("cookie-parser");
app.use(cp());
app.get("/",(req,res)=>{
    res.cookie(`fname`,`test1`);
    res.cookie(`lname`,`test2`);
    res.cookie(`subject`,`FSD2`,{maxAge:5000});
    res.cookie(`fname`,`test1`);
    res.cookie(`email`,`text@gmail.com`,{expires:new Date(Date.now()+10000)});
    res.clearCookie("lname");
    res.send(req.cookies);
})
app.listen(4000);