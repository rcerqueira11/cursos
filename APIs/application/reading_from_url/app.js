var express = require('express');
var app = express()


// ./ means is a local module
// var logger = require('./logger');
// we get a middelware function store in logger
// then we added to the stack
// app.use(logger); 

// app.use(express.static('public'));
// all we need to serve static files from the public folder 

app.get('/block',function(request,response){
	blocks = ['Fixed','Movable','Rotating'];

	if (request.query.limit >= 0){
		response.json(blocks.slice(0,request.query.limit));
		// slice is a native js function it takes two argumente
		// first is where the straction begans
		// second is where it ends

	}	else {
		
		response.json(blocks);
	}
})


app.listen(3000, function(){
	console.log('Listening on port 3000');
});
// lo pasamos por el puerto tcp 3000

