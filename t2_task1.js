var express=require("express");
var app=new express();

data=[{"name":"X","age":20},
{"name":"Y","age":10},
{"name":"Z","age":15}]

app.get("/sort",(req,res)=>{
    res.type("text/html");
    var temp=data.sort((a,b)=>
        b.age-a.age)
    res.write(`<table border="1"> 
        <tr><th> Name </th>
            <th> Age </th>
        </tr>`)
    for(t of temp){
        res.write(`
        <tr>
            <td>${t.name}</td>
            <td>${t.age}</td>
        </tr>`)
    }
    res.write(`</table>`);
    res.send();

}) 
app.listen(3001)