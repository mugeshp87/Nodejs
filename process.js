const process = require("process");
var no_versions = 0;
var versions = process.versions;
for (var key in versions) {
  console.log(key + ":\t\t" + versions[key]);
  no_versions++;
}
console.log("Total no of values available = " + no_versions);
