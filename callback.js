function callfunction(fun)
{
    fun()
}
var newfunc=function(){
console.log('new function');
}
callfunction(newfunc)