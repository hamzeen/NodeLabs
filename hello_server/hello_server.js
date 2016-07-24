const http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function (request, response) {
  // here we are writing a http response in html with the text "Hello World"
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end('<h1>Hello Simple Server</h1>');

  // one can even handle a http request here. But we are just leaving it aside :)
});

/**
 * this would print the following on your console "Server running at http://127.0.0.1:3000/"
 * to confirm that our simple web server is running.
 */
server.listen(port, function(){
    console.log("Server listening on: http://localhost:", port);
});
