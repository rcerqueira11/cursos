module.exports =function(request,response,next){
// to track duration 
var start = +new Date();
// the plus sing converts date object to milliseconds

// log message to the standart output
var stream = process.stdout;
// we assing it to a variable to use it later easily
var url = request.url;
var method = request.method;

// using listener to know when it finish
response.on('finish', function(){
	// function is a callback who runs asincronally
	var duration = +new Date() - start;
	var message = method + ' to ' + url + 
	'\ntook ' + duration + ' ms \n\n';

	// ti print logs message
	stream.write(message);
});




next();
}
