var express = require('express');
var app = express();
var port = 5000;
app.use(express.static('public'));
var dom = [];

//app.use bodyparser at somepoint
//app.use(bodyParser.urlencoded({extended: true}));
app.listen(port,function(){

console.log('listening on teh porttoo', port);

});
app.get('/codeChallenge',function(req,res){
    res.send(dom)
})