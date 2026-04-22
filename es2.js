// task 3
const sess=require("express-session");
var express=require("express");
var app=express();

app.use(sess({secret:"LJU123",
    cookie:{maxAge:15000},
    name:"login"}
));

app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"h2.html"}));

app.post("/savesession",(req,res)=>{
    req.session.name=req.body.name;
    req.session.pass=req.body.pass;
    res.redirect("/fetchsession");
})

app.get("/fetchsession",(req,res)=>{
    res.send(`<h1> Welcome ${req.session.name} </h1><br><br>
        <a href="/deletesession">logout</a>`);
});

app.get("/deletesession",(req,res)=>{
    req.session.destroy();
    res.clearCookie("login");
    res.redirect("/");
});

app.listen(4000)