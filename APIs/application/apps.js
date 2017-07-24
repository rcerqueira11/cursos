var express = require('express');
var app = express()


app.get( '/',function(request,response){
		response.send('Hello world');

	});


app.listen(3000, function(){
	console.log('Listening on port 3000');
});
// lo pasamos por el puerto tcp 3000

