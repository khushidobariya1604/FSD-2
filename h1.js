var http=require("http");
http.createServer((req,res)=>{
    //res.writeHead(200,{"content-type":"text/plain"});
    res.write("Hello")
    res.end("<h1> WELCOME TO MY WEBSITE</h1>");
    res.write("<h3>LAST</h3>")
    //res.end();

}).listen(7001,()=>{
    console.log("Server Started !");
})