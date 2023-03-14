var fs = require("fs");
var readdstrm = fs.ReadStream("stream.txt", "utf-8");
var writestrm = fs.WriteStream("stream1.txt");
readdstrm.on("data", function (chunk) {
  console.log("chunks received");
  console.log(chunk);

  writestrm.write(chunk);
});
