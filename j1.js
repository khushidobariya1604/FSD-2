var http=require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"Application/json"});
    var d={"subject":"FSD-2","Faculty":"NAS"};
    res.end(JSON.stringify(d));
}).listen(8001,()=>{
    console.log("Server Started on http://localhost:8001")
})