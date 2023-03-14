let buffer1=new Buffer.alloc(10,'Name')
let buffer2=new Buffer.alloc(20,'Age')
console.log(buffer1)
console.log(buffer2);
console.log(new Buffer.from(buffer1).equals(buffer2))
let buff = new Buffer.alloc(5, "APJ");
let name1 = new Buffer.alloc(5, "Name");
buff.copy(name1);
console.log(name1.toString());
console.log(buff.length);
console.log(name1.length);
let Json = new Buffer.alloc(10, { name: 'Node' });
console.log(Json.toJSON());




