var http = require('http');
var fs = require('fs');
http.createServer(function(res,req){
  switch (res.url) {
    case '/graph.json':
      req.end(fs.readFileSync('graph.json'));
      break;
    case '/d3.v4.min.js':
    req.end(fs.readFileSync('d3.v4.min.js'));
    break;

    default:
      req.end(fs.readFileSync('index.html'));
  }
}).listen(8080);
