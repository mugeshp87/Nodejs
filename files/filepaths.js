const path=require('path')
const filepath='files/asyncfile.txt';
a=path.dirname(filepath)
console.log(a)
b=path.basename(filepath,path.extname(filepath))
console.log(b)
c=path.extname(filepath)
console.log(c)

//working with filepaths
const newpath='we are giving new path'
hi=path.join('/','filepath',newpath,'asyncfile.txt')
console.log(hi)
resol=path.resolve('1.txt')
resol1=path.resolve('new','1.txt')
resol2=path.resolve('/new','1.txt')
resol3=path.normalize('/..hello/./../home.txt')
console.log(resol)
console.log(resol1)
console.log(resol2)
console.log(resol3);


