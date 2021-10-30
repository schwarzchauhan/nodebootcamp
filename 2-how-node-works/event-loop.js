const fs = require('fs');


setTimeout(() => {
    console.log("timer 1 finished");
}, 0);
setImmediate(() => {
    console.log("immediate 1 finished");
});


fs.readFile('test-file.txt', () => {
    console.log("i/p finished");
});

console.log("hello from top lvl code");