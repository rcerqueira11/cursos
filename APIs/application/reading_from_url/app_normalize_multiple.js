var express = require('express');
var app = express()


// ./ means is a local module
// var logger = require('./logger');
// we get a middelware function store in logger
// then we added to the stack
// app.use(logger); 

app.use(express.static('public'));
// all we need to serve static files from the public folder 

var blocks = {
	'Fixed': 'Fastened securely in position ',
	'Movable':'Capable of being moved',
	'Rotating':'Moving in a circle around its center',
}

var locations = {
	'Fixed': 'First Floor',
	'Movable':'Second Floor',
	'Rotating':'Third Floor',
}
var stream = process.stdout;
app.param('name', function(request,response,next){
	var name = request.params.name;
	var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
	// this can be accessed from other routes in the aplicatio
	request.blockName=block;
	response.on('finish',function(){
		stream.write("the blockname is: " +request.blockName+"\n\n");
	});
	next();

});


app.get('/blocks/:name',function(request,response){
	// blocks = ['Fixed','Movable','Rotating'];
	// var name = request.params.name
	// we conver the first character to upper case and the remaining char to lower
	// var block= name[0].toUpperCase() + name.slice(1).toLowerCase(); 

	var description = blocks[request.blockName];
	if(!description){
		// response.status(404).json("No description found for "+ request.params.name);
		response.json(blocks);

	} else {
		response.json(description);
	}

})

app.get('/locations/:name',function(request,response){
	// blocks = ['Fixed','Movable','Rotating'];
	// var name = request.params.name
	// we conver the first character to upper case and the remaining char to lower
	// var block= name[0].toUpperCase() + name.slice(1).toLowerCase(); 

	var description = locations[request.blockName];
	if(!description){
		response.status(404).json("No description found for "+ request.params.name);

	} else {
		response.json(description);
	}

})


app.get('/blocks',function(request,response){
	// blocks = ['Fixed','Movable','Rotating'];
	// var name = request.params.name
	// we conver the first character to upper case and the remaining char to lower
	// var block= name[0].toUpperCase() + name.slice(1).toLowerCase(); 

	response.json(Object.keys(blocks));


})

app.listen(3000, function(){
	console.log('Listening on port 3000');
});
// lo pasamos por el puerto tcp 3000

