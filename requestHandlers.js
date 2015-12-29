function postWhiteBoard(request, response) {
	console.log("POST White Board request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("POST WhiteBoard request received.");
    response.end();
}

function getWhiteBoard(request, response) {
    console.log("GET White Board request received.");
    var body = createWhiteBoardForm();
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function createWhiteBoardForm() {
    return '<html>'+
                '<head>'+
                '<meta http-equiv="Content-Type" content="text/html; '+
                'charset=UTF-8" />'+
                '</head>'+
                '<body>'+
                '<form action="/whiteboard" method="post">'+
                '<textarea name="text" rows="20" cols="60"></textarea>'+
                '<input type="submit" value="Submit text" />'+
                '</form>'+
                '</body>'+
                '</html>';     
}

exports.getWhiteBoard = getWhiteBoard;
exports.postWhiteBoard = postWhiteBoard;