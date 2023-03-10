const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question('what is role of job',role=>{
    console.log(`YOur Role is ${role}`);
    readline.close();
  });
  