var express=require("express");
var app=express();

var cp=require("cookie-parser");
app.use(express.urlencoded());
app.use(cp());

app.use(express.static(__dirname,{index:"cp2.html"}));

app.post("/submit",(req,res)=>{
    var {name,email,msg,rating}=req.body
    var feedback={name,email,msg,rating}
    res.cookie("feedback",feedback,{maxAge:10000});
    res.send(`<h1> Thank you !</h1><br>
        <a href="/view">View Feedback</a>`);
        
})
app.get("/view",(req,res)=>{
    var fb=req.cookies.feedback;
    if(fb){
        res.send(`<h1> Thank you ${fb.name}</h1><br>
            <h3> Your Message ${fb.msg}</h3>
            <h3> Your Rating ${fb.rating}</h3>`);
    }
    else{
        res.send(`<h4> No Feedback available</h4>
            <a href="/">Logout</a>`);
    }
})
app.listen(4000);