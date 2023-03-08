const fs = require("fs");
const content = "this is node js practise ,we are implementing in";
fs.writeFileSync("textdoc.txt", content);
const content1 = "this is content 1";
fs.writeFileSync(
  "asyncfile.txt",
  content1,
  (err = {
    if(err) {
      console.log(error);
    },
  })
);
const fs2 = require("fs/promises");
async function file() {
  const prmcontent = "promisrgbfev";
  await fs2.writeFile("asyncfile.txt", prmcontent,(err) => {
    console.log(err);
  });
}
file();

async function afile(){
    const afile='appendfilee';
    await fs2.appendFile('asyncfile.txt',afile)
}
afile();
