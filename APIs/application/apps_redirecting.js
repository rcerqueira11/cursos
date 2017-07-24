var express = require('express');
var app = express()


app.get( '/blocks',function(request,response){
		// response.redirect('/parts')
		// we need to make it permanent redirect
		// yo can pass the status code as the 
		// first parameter
		response.redirect(301,'/parts')

	});


app.listen(3000, function(){
	console.log('Listening on port 3000');
});
// lo pasamos por el puerto tcp 3000

