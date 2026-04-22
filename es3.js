// task 4
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
    res.redirect("/fetchdata");
})

app.get("/fetchdata",(req,res)=>{
  
    if(req.session.name==="admin" && req.session.pass==="admin@123"){
        res.send(`<h3> Welcome ${req.session.name} !! </h3>
            <br>
            <a href="destroy">logout<a>`)
    }
    else{
        res.send(`<h3> Please enter valid username and password </h3>
            <a href="/">login</a>`)
    }
});

app.get("/destroy",(req,res)=>{
    req.session.destroy();
    res.send(`<h4> Session Destroyed</h4>
        <br>
        <a href="/">login</a>`);
})
app.listen(5000);