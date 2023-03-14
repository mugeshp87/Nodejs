var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {
console.log('Req was made:'+req.url)
res.writeHead(200,{'Content-Type':'text/plain'});
  var readdstrm = fs.ReadStream("stream.txt", "utf-8");
readdstrm.pipe(res)
});
server.listen(3000,'127.0.0.1')
console.log('Server is listening to port number 3000');

