function route(handle, pathName){
    console.log("About to route a request for: " + pathName);
    
    if(typeof handle[pathName] === 'function'){
        handle[pathName]();
    }else{
        console.warn("No request handler for: " + pathName);
    }
    
}

exports.route = route;