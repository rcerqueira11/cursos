var express = require('express');
var app = express()


// ./ means is a local module
// var logger = require('./logger');
// we get a middelware function store in logger
// then we added to the stack
// app.use(logger); 

// app.use(express.static('public'));
// all we need to serve static files from the public folder 

var blocks = {
	'Fixed': 'Fastened securely in position ',
	'Movable':'Capable of being moved',
	'Rotating':'Moving in a circle around its center',
}

app.get('/block/:name',function(request,response){
	// blocks = ['Fixed','Movable','Rotating'];
	var name = request.params.name
	// we conver the first character to upper case and the remaining char to lower
	var block= name[0].toUpperCase() + name.slice(1).toLowerCase(); 

	var description = blocks[block]


	if(!description){
		response.status(404).json("No description found for "+ request.params.name);

	} else {
		response.json(description);
	}

})


app.listen(3000, function(){
	console.log('Listening on port 3000');
});
// lo pasamos por el puerto tcp 3000

