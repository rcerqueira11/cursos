var express = require('express');
var app = express()


// ./ means is a local module
var logger = require('./logger');
// we get a middelware function store in logger
// then we added to the stack
app.use(logger); 

app.use(express.static('public'));
// all we need to serve static files from the public folder 

app.get('/blocks',function(request,response){
	blocks = ['Fixed','Movable','Rotating'];
	response.json(blocks);
})


app.listen(3000, function(){
	console.log('Listening on port 3000');
});
// lo pasamos por el puerto tcp 3000

