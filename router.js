function route(handle, pathname, request, response) {
    console.log("About to route a request for " + pathname + ".");
    
    if( handle[request.method] && 
        handle[request.method][pathname] &&
        typeof handle[request.method][pathname] === 'function'
    )
    {
        handle[request.method][pathname](request, response);
    }
    else{
        console.log("No request handler found for " + request.Method + " and request path " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found.");
        response.end();
    }
}

exports.route = route;