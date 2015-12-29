function postWhiteBoard(request, response) {
	console.log("POST White Board request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("POST WhiteBoard request received.");
    response.end();
}

function getWhiteBoard(request, response) {
    console.log("GET White Board request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("GET WhiteBoard request received.");
    response.end();
}

exports.getWhiteBoard = getWhiteBoard;
exports.postWhiteBoard = postWhiteBoard;