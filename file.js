const fs = require("fs");

fs.stat("test.txt", (err, stats) => {
  if (err) {
    console.error(err);
  }
});
