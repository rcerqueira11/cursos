var express = require('express');
var app = express()


app.get( '/',function(request,response){
		// using node api
		response.write('Hello world con write\n');
		response.end()
		// == response.send

	});


app.listen(3000, function(){
	console.log('Listening on port 3000');
});
// lo pasamos por el puerto tcp 3000

