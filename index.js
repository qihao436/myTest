var http = require('http');
var fs = require('fs');
http.createServer(function(res, req) {
  console.log(res.url);

    try {
      req.end(fs.readFileSync(res.url.substring(1)));
    } catch (e){
      req.end(fs.readFileSync('index.html'));
    }

}).listen(8080);
