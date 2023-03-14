
var url = require("url");
var url1 =
"http://www.google.com:3000/search?channel=fs&client=ubuntu&q=angular+io"
var queryString = url.parse(url1);
console.log(queryString);

console.log("Complete link : " + queryString.href);
console.log("Host : " + queryString.host);
console.log("Host name : " + queryString.hostname);
console.log("Path name : " + queryString.pathname);
console.log("Search items : " + queryString.search);
console.log("Old port : " + queryString.port);
queryString.port = 4500;
console.log("Changed port : " + queryString.port);
console.log("Protocol : " + queryString.protocol);
