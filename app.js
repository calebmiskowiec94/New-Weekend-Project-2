var express = require('express');
var app = express();
var port = 5000;
app.use(express.static('public'));
app.post('/codeChallenge', function(req,res){
console.log('it works');
//v v v v  .send is only for (200)
dom.push(req.body) //if you dont add body parser to 
//project req.body will be undefind
//
	res.sendStatus(201);

});
var dom = [];

//app.use bodyparser at somepoint
//app.use(bodyParser.urlencoded({extended: true}));
app.listen(port,function(){

console.log('listening on teh porttoo', port);

});
app.get('/codeChallenge',function(req,res){
    res.send(dom)
})