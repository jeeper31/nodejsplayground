function route(handle, pathName, response){
    console.log("About to route a request for: " + pathName);
    
    if(typeof handle[pathName] === 'function'){
        handle[pathName](response);
    }else{
        console.warn("No request handler for: " + pathName);
        
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
    
}

exports.route = route;