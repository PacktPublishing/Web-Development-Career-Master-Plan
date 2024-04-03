const http = require("http");

const server = http.createServer(function (inRequest, inResponse) {
  inResponse.end("Hello from your first Node server!");
});

server.listen(80);
