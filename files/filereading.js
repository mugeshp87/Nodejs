const fs=require('fs')
fs.readFile('asyncfile.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)

})

const data=fs.readFileSync('textdoc.txt','utf8')
console.log(data)



  