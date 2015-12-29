var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["POST"] = {};
handle["POST"]["/whiteBoard"] = requestHandlers.postWhiteBoard;

handle["GET"] = {};
handle["GET"]["/whiteboard"] = requestHandlers.getWhiteBoard;

server.start(router.route, handle);