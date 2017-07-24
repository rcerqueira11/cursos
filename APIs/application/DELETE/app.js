var express = require('express');
var app = express()

var bodyParser = require('body-parser');
var parseUrlencode= bodyParser.urlencoded({ extended: false});

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
	var description = blocks[request.blockName];
	if(!description){
		// response.status(404).json("No description found for "+ request.params.name);
		response.json(blocks);
// 
	} else {
		response.json(description);
	}
})

app.get('/locations/:name',function(request,response){
	var description = locations[request.blockName];
	if(!description){
		response.status(404).json("No description found for "+ request.params.name);

	} else {
		response.json(description);
	}
})

app.get('/blocks',function(request,response){
	response.json(Object.keys(blocks));
})

// with this we create our endpoint to postign to block paths
app.post('/blocks',parseUrlencode, function(request,response){
	var newBlock = request.body;
	blocks[newBlock.name] = newBlock.description;
	response.status(201).json(newBlock.name);
});


app.delete('/blocks/:name',function(request,response){
	// delete operator from js removes a property from a object
	delete blocks[request.blockName];

	// we use send estatus when we dont wanna manually send a response body
	response.sendStatus(200); // sets response body to OK

});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});
// lo pasamos por el puerto tcp 3000

