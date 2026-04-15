var express=require("express");
var app=new express();

// app.get("/user/:uid/branch/:b",(req,res)=>{
//     res.send(req.params);
// })

app.get("/user/:uid/branch/:b",(req,res)=>{
    res.write(JSON.stringify(req.params));
    res.write(JSON.stringify(req.query));
    res.send();
})
app.listen(7007);


// http://localhost:7007/user/101/branch/cse