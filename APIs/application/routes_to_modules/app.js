var express = require('express');
var app = express()


app.use(express.static('public'));
// all we need to serve static files from the public folder 

var blocks = require('./routes/blocks');
// then we mount our blocks in the blocks path
app.use('/blocks',blocks);


// var blocksRoute = app.route('/blocks');



// var locations = {
// 	'Fixed': 'First Floor',
// 	'Movable':'Second Floor',
// 	'Rotating':'Third Floor',
// }
// var stream = process.stdout;

// app.param('name', function(request,response,next){
// 	var name = request.params.name;
// 	var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
// 	// this can be accessed from other routes in the aplicatio
// 	request.blockName=block;
// 	response.on('finish',function(){
// 		stream.write("the blockname is: " +request.blockName+"\n\n");
// 	});
// 	next();
// });



// app.get('/locations/:name',function(request,response){
// 	var description = locations[request.blockName];
// 	if(!description){
// 		response.status(404).json("No description found for "+ request.params.name);

// 	} else {
// 		response.json(description);
// 	}
// })

// app.get('/blocks',function(request,response){



app.listen(3000, function(){
	console.log('Listening on port 3000');
});
// lo pasamos por el puerto tcp 3000

