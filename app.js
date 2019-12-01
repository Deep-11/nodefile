const express = require("express");
const app = express();
app.set('view engine', 'ejs');
console.log("hi")
app.get('/', function(req, res){
	//res.send("welcome to the first node program");
	res.render('index');
});
const PORT = 3000;
const IP = '127.0.0.1';

app.listen(PORT, IP, function(){
	console.log("node server is up and running");
});