function fetchData () {
promiseToken='async working'
return promiseToken;
}
async function read() {
const promisedData=await fetchData()
console.log(promisedData);
};
console.log('Program Starts');
read();
console.log('Program Ends');