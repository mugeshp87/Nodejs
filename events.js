const EventEmitter=require('events')
const evnt=new EventEmitter();
evnt.on('greetings',()=>{
    console.log('hi hello welcome to our home team')

})
evnt.on('greetings',(number)=>{
    console.log(`hi hello welcome to our home  ${number} team members`)

})
evnt.on('greetings',(number,officename)=>{
    console.log(`hi hello welcome to our home  ${number} team members from ${officename}`)

})
evnt.emit('greetings',456,'aspire systems')