var http = require("http");
var url = require("url");


function start(route, handle){
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("Got a request son for: " + pathName);
        
        route(handle, pathName, response);
    }
    
    http.createServer(onRequest).listen(process.env.PORT);
    console.log("Server started son!");
}

exports.start = start;