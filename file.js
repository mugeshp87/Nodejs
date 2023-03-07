// const filesystem=require('fs');
// try{
//     const stats=filesystem.statSync('./hi.txt')
//     console.log('eror ocuring')
// }
// catch(err)
// {
// console.log(err)
// }
const fs = require("fs");

fs.stat("/Users/joe/test.txt", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  stats.isFile(); // true
  stats.isDirectory(); // false
  stats.isSymbolicLink(); // false
  stats.size; // 1024000 //= 1MB
});
const fs = require("fs");

const pathsToCheck = ["./fileCheckForExistence"];

for (let i = 0; i < pathsToCheck.length; i++) {
  fs.stat(pathsToCheck[i], function (err, stats) {
    console.log(stats.isDirectory());
  });
}
const fs = require('fs');
const util = require('util');

async function example() {
  const open = util.promisify(fs.open);
  const fd = await open('/Users/joe/test.txt', 'r');
}
example();

