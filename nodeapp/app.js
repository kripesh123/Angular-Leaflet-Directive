var http = require('http')

function HttpServer(port){
	var obj =this
	obj.start=function(){
		console.log("Http Server is running at" +port);
		http.createServer(function(req,res){
			console.log(req.url);
		}).listen(port);
	}
	return obj;
}
new HttpServer(2020).start();