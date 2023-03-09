const fs=require('fs')
fs.open('asyncfile.txt','a+',(err,fd)=>{
    console.log(fd)
})
// fs.unlink('hello.txt',(err)=>{
//     if(err)
//     {
//         console.log(err);
        
//     }
// })



