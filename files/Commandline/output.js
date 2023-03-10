// x=10
// y=25
// console.log(x,y)
// console.log('My name is %s,my age is %d','mugesh',18)
// console.log('My name is %s,my age is %i','mugesh','18vdv')
// console.log('%o',Object)
const chalk=require('chalk')
const ab=10
console.count('value is ' + ab + ' called times')
console.count('value is ' + ab + ' called times')
console.count('value is ' + ab + ' called times')
// console.countReset(ab)
// console.count(''+ab+'')
const function2 = () => console.trace();
const function1 = () => function2();
function1();
const hello=()=>console.log('TimeCalculation')
hello()
const timemeasure=()=>{
    console.time('hello()');
    hello();
    console.timeEnd('hello()')

};
timemeasure();
console.log(chalk.blue('Chalk Console'))

//progressbar
const progress=require('progress')
const bar=new progress(':bar',{total:100});
const timer=setInterval(()=>{
    bar.tick();
    if(bar.complete)
    {
        clearInterval(timer)
    }
},100)