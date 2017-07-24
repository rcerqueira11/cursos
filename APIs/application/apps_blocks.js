var express = require('express');
var app = express()


app.get( '/blocks',function(request,response){
		var blocks = ['Fixed','Movable','Rotating'];
		// response.send(blocks);
		response.json(blocks);
		// json funcitons same response as send, for objects and arrays
	});


app.listen(3000, function(){
	console.log('Listening on port 3000');
});
// lo pasamos por el puerto tcp 3000

