var http = require("http");


function start(){
    function onRequest(request, response) {
        console.log("Got a request son!");
        
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello Sucka!!!");
        response.end();
    }
    
    http.createServer(onRequest).listen(process.env.PORT);
    console.log("Server started son!");
}

exports.start = start;