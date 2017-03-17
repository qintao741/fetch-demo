var http = require("http");
var fs = require("fs");
	var data = {
		name:"liubintao",
		age:18
	}
var realPath = __dirname + "/demo.html";
http.createServer(function(req,res){
	console.log(req.url);
	if(req.url === "/getJson"){
		res.end(JSON.stringify(data));
	}else {

	// 发送响应数据 "Hello World"
		fs.readFile(realPath, "binary", function (err, file) {
	        if (err) {
	        	console.log('this is err')
	            res.writeHead(500, {
	                'Content-Type': 'text/plain'
	            });

	            res.end(err.toString());
	        } else {
	            res.writeHead(200, {
	                'Content-Type': 'text/html'
	            });

	            res.write(file, "binary");

	            res.end();
	        }
	    });
	}
}).listen(8081);

console.log('localhost:8081....');  