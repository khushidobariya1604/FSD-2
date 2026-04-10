var express=require("express");
var app=express();

student={"name":"test","age":20}
app.get("/j1",(req,res)=>{
    res.send(student.age);
})

app.get("/j2",(req,res)=>{
    res.json(student.age);
})

app.get("/j3",(req,res)=>{
    res.write(JSON.stringify(student.age));
    res.end();
})

app.listen(3000,"localhost",100,()=>{
    console.log("Server Started");
})