var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var parseUrlencode= bodyParser.urlencoded({ extended: false});



var blocks = {
	'Fixed': 'Fastened securely in position ',
	'Movable':'Capable of being moved',
	'Rotating':'Moving in a circle around its center',
}

// router path is relative to where it's mounted app.use('/blocks',) in the app.js file
router.route('/') 
.get(function(request,response){
	response.json(Object.keys(blocks));
})

// with this we create our endpoint to postign to block paths
// app.post('/blocks',parseUrlencode, function(request,response){
.post(parseUrlencode, function(request,response){
	var newBlock = request.body;
	blocks[newBlock.name] = newBlock.description;
	response.status(201).json(newBlock.name);
});

router.route('/:name')
	.all(function(request,response,next){
		var name = request.params.name;
		var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
		// this can be accessed from other routes in the aplicatio
		request.blockName=block;
		response.on('finish',function(){
			stream.write("the blockname is: " +request.blockName+"\n\n");
		});
		next();
	})
	.get(function(request,response){
		var description = blocks[request.blockName];
		if(!description){
			// response.status(404).json("No description found for "+ request.params.name);
			response.json(blocks);
	 
		} else {
			response.json(description);
		}
	})
	.delete(function(request,response){
		// delete operator from js removes a property from a object
		delete blocks[request.blockName];

		// we use send estatus when we dont wanna manually send a response body
		response.sendStatus(200); // sets response body to OK
	});

module.exports = router;