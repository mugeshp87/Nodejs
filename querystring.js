const { parse } = require('path');
const queryString=require('querystring')
const q1=queryString.stringify({
    name:'Lamp',
    company:'Aspire',
    content:'Development',
    date:'9th2023'
})
console.log(q1);
const url1 =
"http://www.google.com:3000/search?channel=fs&client=ubuntu&q=angular+io"
console.log(parse(url1))