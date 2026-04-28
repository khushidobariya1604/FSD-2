var express=require("express");
const { request } = require("node:http");
var router=express.Router();

var obj=[{id:101,name:"A",age:18,city:"Ahmedabad",branch:"CSE"},
         {id:102,name:"B",age:19,city:"Surat",branch:"CE"},
         {id:103,name:"C",age:18,city:"Ahmedabad",branch:"CST"},
         {id:104,name:"D",age:19,city:"Rajkot",branch:"CSE"},
         {id:105,name:"E",age:18,city:"Surat",branch:"CE"},
         {id:106,name:"F",age:19,city:"Rajkot",branch:"CST"},
]

router.get("/",(req,res)=>{
    res.type("text/html");
    for(o of obj){
        res.write(`<h1> Name : ${o.name}
                        Age : ${o.age}
                        Branch : ${o.branch}
                        City: ${o.city} </h1>`)
    }
    res.send()
})

router.get("/id/:id",(req,res)=>{
    var data=obj.filter(o => o.id==req.params.id)
    if(data.length>0){
        res.send(data);
    }
    else{
        res.send("No Data Available");
    }
})

router.get("branch/:branch",(req,res)=>{
    var data=obj.filter((o) => o.branch.toLowerCase()==req.params.branch.toLowerCase());
    if (data.length>0){
        res.send(data);
    }
    else{
        res.send("No Data Available")
    }
})

module.exports=router;