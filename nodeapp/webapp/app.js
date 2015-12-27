var express = require('express')
app= express()
var port=3000;

app.use(express.static("public"));
app.use("/static",express.static("assets"));

app.get("/",function(req,res){
	res.sendFile("index.html");
});

console.log("Http Server is running at "+port);
app.listen(port);