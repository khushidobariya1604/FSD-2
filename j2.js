var fs=require("fs");
var http=require("http");
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end(`<h1>MY HOMEPAGE</h1>

            <img src="a.jfif"width="300" height="300">`)
    }
    else if(req.url==="/a.png"){
        var i=fs.readFileSync("a.jfif");
        res.writeHead(200,{"content-type":"image/html"});
        res.write(i);
    }
    else if(req.url==="/about"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write(req.url);
        res.end("<h1>About Page </h1>")

    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h3>Page Not Found</h3>")
    }

}).listen(7004,()=>{
    console.log("Server Started")
})