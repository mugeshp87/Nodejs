// async1(function (input, result1) {
//     async2(function (result2) {
//       async3(function (result3) {
//         async4(function (result4) {
//           async5(function (output) {
//             // do something with output
//             input="Hi Node Js"
//             console.log(input)
//           });
//         });
//       });
//     });
//   });
function final(someInput, callback) {
    callback(`${someInput} and terminated by executing callback `);
  }
  
  function middleware(someInput, callback) {
    return final(`${someInput} touched by middleware `, callback);
  }
  
  function initiate() {
    const someInput = 'hello this is a function ';
    middleware(someInput, function (result) {
      console.log(result);
      // requires callback to `return` result
    });
  }
  
  initiate();
  