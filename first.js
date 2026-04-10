var express=require("express");
var app=express();
app.get("/",(req,res)=>{
    // res.set("content-type","text/plain");
    // res.type("text/html");
    res.setHeader("content-type","text/html")
    res.write(`<h3> Hii ! </h3>`);
    // res.send(`<h2> Express JS </h2>`);

    res.send();
})
app.get("/about",(req,res)=>{
    res.send(`<h2 style="color:purple"> Express Example </h2>`)
})
app.listen(3000,"localhost",100,()=>{
    console.log("Server Started");
})