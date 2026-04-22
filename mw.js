var express=require("express");
var app=express();

app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"h3.html"}));

var mwdata=(req,res,next)=>{
    res.type("text/html");
    res.write(`<h1>Welcome ${req.body.name} !</h1>
        <h4> Your email id is ${req.body.mail}..</h4>`)
    next();
}

app.post("/login",mwdata,(req,res)=>{
    if(req.body.subscribe==="on"){
        res.write(`<h3> Thank you for the Subscription</h3>
            <a href="/">logout</a>`);
    }
    else{
        res.write(`<h3>You can subscribe to get daily updates </h3>
            <a href="/subscribe">subscribe</a>`)
    }
    res.send();
})

app.get("/subscribe",(req,res)=>{
    res.send(`<h1> Thank you for the subscription </h1>
        <a href="/">logout</a>`)
})
app.listen(5001);