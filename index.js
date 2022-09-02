// console.log("Hello world");

// const { response } = require('express');
// const { chmod } = require('fs');
var http = require("http");

// http.createServer(function(request, response){
//     // response.writeHead(202,{'Content-Type' : 'text/plain'});
//     response.end('hello world\nThis is your first program on node.js');
// }).listen(8081)

const testServer = http
  .createServer(function (request, response) {
    if (request.url === "/") {
        const a = '<h1><i>welcome to our homepage</i></h1s>'
      response.end(a);
    //   response.end("<h1>This is about us</h1>");
      // response.end;
    } else if (request.url === "/About") {
      response.end("<h1>This is about us</h1>");
      // response.end;
    }
  })
  .listen(5000);
console.log("Server running at http://localhost:5000/");
console.log("location is " + __dirname);

// terminal.end
