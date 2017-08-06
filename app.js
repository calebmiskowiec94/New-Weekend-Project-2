var express = require('express');
//var client = require('./client.js');
var bodyParser = require('body-parser')
var app = express();
var port = 5000;
var dom = []
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.post('/codeChallenge', function(req,res){
//console.log(dom);
console.log(req.body)
//v v v v  .send is only for (200)
//dom.push(req.body) //if you dont add body parser to 
//project req.body will be undefinda
//
	//res.sendStatus(201);

});
//var dom = [];

//app.use bodyparser at somepoint

app.get('/codeChallenge',function(){
    console.log("getting")
})
app.listen(port,function(){

console.log('listening on teh porttoo', port);

});
//app.get('/codeChallenge',function(req,res){
    //res.send(dom)
//})


