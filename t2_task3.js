var express=require("express");
var app=new express();

app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="post">
        <input type="text" name="un"/>
        <input type="password" name="pass"/>
        <input type="submit"/>
        </form>`)
})

var check=(req,res,next)=>{
    
    if(req.body.un==="admin" && req.body.pass==="1234"){
        next();
    }
    else{
        res.send("Invalid Credentials")
    }
}

app.post("/data",check,(req,res)=>{
    res.send(`<h1>Welcome ${req.body.un}..</h1>`)
})
app.listen(8002);