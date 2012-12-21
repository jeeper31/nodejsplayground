var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");
  
  exec("ls -lah", function(error, stdout, stderr){
    writeContent(response, stdout);
  });
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  writeContent(response, "Upload some shiz sucka!");
}

var writeContent = function(response, content){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(content);
    response.end();
}

exports.start = start;
exports.upload = upload;