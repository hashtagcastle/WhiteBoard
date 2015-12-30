function route(handle, pathname, request, response) {
    console.log("About to route a request for " + pathname + ".");
    
    var requestMethod = request.method;
    var sanitizedPathName = pathname.toLowerCase();
    if( handle[requestMethod] && 
        handle[requestMethod][sanitizedPathName] &&
        typeof handle[requestMethod][sanitizedPathName] === 'function'
    )
    {
        handle[requestMethod][sanitizedPathName](request, response);
    }
    else{
        console.log("No request handler found for " + requestMethod + " and request path " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found.");
        response.end();
    }
}

exports.route = route;