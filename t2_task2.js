var express=require("express");
var app=new express();

app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="post">
        num1=<input type="number" name="n1"/>
        num2=<input type="number" name="n2"/>
        <select name="formula">
            <option value="add">Addition</option>
            <option value="sub">Subtraction</option>
        </select>    
        <input type="submit"/>
        </form>`)
})
app.post("/data" , (req,res)=>{
    var n1=parseInt(req.body.n1)
    var n2=parseInt(req.body.n2)
    if(req.body.formula==="add"){
        res.send(`<h2>Addition of ${n1} and ${n2} is ${n1+n2} </h2>`)
    }
    else{
        res.send(`<h2>Subtraction of ${n1} and ${n2} is ${n1-n2} </h2>`)
    }
    
})
app.listen(7002);