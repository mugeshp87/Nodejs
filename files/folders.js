const fs=require('fs')
const foldername='files/mugi'
    if(!fs.existsSync(foldername))
        fs.mkdirSync(foldername)

fs.rename('files/mugi','files/new',err=>{
    if(err)
    {
        console.log(err)
    }
    
})
const deletefolder='files/dummy'
fs.rm(deletefolder,{recursive:true,force:true},err=>{
    if(err){
        console.log(err)
    }
    console.log(`${deletefolder} is deleted succesfully`)
})
console.log(``);
