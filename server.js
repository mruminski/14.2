var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function(request, response) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('./index.html', 'utf-8', function(err,file) {
      if (err) throw err;
      response.write(file);
      response.end();
    });
  } else {
    request.statusCode = 404;
    response.write('<img src="https://openclipart.org/download/289230/404-stamp.svg">');
    response.end();
  }
});

server.listen(3000);