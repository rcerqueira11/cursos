var express = require('express');
var app = express()


app.get( '/blocks',function(request,response){
		var blocks = '<ul><li>Fixed</li><li>Movable</li></ul>';
		response.send(blocks);
	});


app.listen(3000, function(){
	console.log('Listening on port 3000');
});
// lo pasamos por el puerto tcp 3000

