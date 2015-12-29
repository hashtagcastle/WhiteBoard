var http = require('http');
var url = require('url');

function start(route, handle) {
  
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    
    route(handle, pathname, request, response);
  }
  
  var port = process.env.PORT || 1337;
  http.createServer(onRequest).listen(port);
  console.log("Server has started.");
}

exports.start = start;