// Middle Ware

var express=require("express");
var app=new express();

var first=(req,res,next)=>{
    console.log("First Middleware");
    next();
}
var second=(req,res,next)=>{
    console.log("Second Middleware");
    next();
}
app.use("/",first,second);
app.get("/",(req,res)=>
{
    res.send("Home Page");
})
app.get("/about",first,(req,res)=>{
    res.send("About page");
})
app.listen(3009);