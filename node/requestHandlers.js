var fs = require('fs');

function start(response) {
    console.log("Request handler 'start' was called.");
  
    fs.readFile('node/html/index.html', function (err, html) {
        if (err) {
            throw err; 
        }
        writeContent(response, html);
    });
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    writeContent(response, "Upload some shiz sucka!");
}

var writeContent = function(response, content){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(content);
    response.end();
}

exports.start = start;
exports.upload = upload;