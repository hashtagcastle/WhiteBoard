var http = require('http');
var url = require('url');

function start(route) {
  
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    route(pathname);
    
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Welcome to White Board.\n');
    response.end();
  }
  
  var port = process.env.PORT || 1337;
  http.createServer(onRequest).listen(port);
  console.log("Server has started.");
}

exports.start = start;