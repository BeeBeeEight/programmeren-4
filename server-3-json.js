var http = require('http');

http.createServer(function(request, response){
	console.log('Er was een request.');
	response.writeHead(200, {'Content-Type': 'text/json'});

	var exampleArray = ["item1", "item2"];
	var exampleObject = {
		item1: "item1val",
		item2: "item2val"
	};

	var json = JSON.stringify({
		anObject: exampleObject,
		anArray: exampleArray,
		another: "item"
	});
	response.end(json);
}).listen(4000);

console.log('De server luister op port 4000');