var express = require('express');
var app = express();

//http://Localhost:3000/
app.get('/', function(req, res){
	res.send("Hello world");

});

//http://Localhost:3000/hi

app.get('/hi', function(req, res){
	//res.send("Hi world");
	res.sendfile('index.html');
});

app.get('/api1', function(req, res){
    res.send('hello');


});
app.listen(3000);
console.log("Server started!!!");