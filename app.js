var express = require('express');
//var client = require('./client.js');
var bodyParser = require('body-parser')
var app = express();
var port = 5000;
var dom = [];
function calculate(typeOne, typeTwo, opp){
    if (opp === "addition"){
    dom = [+typeOne + +typeTwo];
        
    }
    else if(opp === "subtraction"){
        dom = [+typeOne - +typeTwo];
        //do this
    }
    else if(opp === "multiplication"){
        //do this
        dom = [+typeOne * +typeTwo];

    }
    else{
        //do this
        dom = [+typeOne / +typeTwo];
    }
    console.log(dom)
    return dom;
}
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.post('/codeChallenge', function(req,res){
//console.log(dom);
//console.log(req.body)
calculate(req.body.inputValueOne, req.body.inputValueTwo, req.body.type);
//calculate(1,2,'addition');
//v v v v  .send is only for (200)
//dom.push(req.body) //if you dont add body parser to 
//project req.body will be undefinda
//
	//res.sendStatus(201);

});
//var dom = [];

//app.use bodyparser at somepoint

app.get('/codeChallenge', function(req,res){
    res.send(dom);
})

app.listen(port,function(){

console.log('listening on teh porttoo', port);

});
//app.get('/codeChallenge',function(req,res){
    //res.send(dom)
//})