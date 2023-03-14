var os = require("os");
console.log("CPU arch:" + os.arch());
console.log("Free Space: " + os.freemem());
console.log("Total memory: " + os.totalmem());
console.log("Default directory for temp files : " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("Operating system name: " + os.type());
console.log("operating system platform: " + os.platform());
console.log("OS release : " + os.release());
