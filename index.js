const fs = require('fs');

console.log('hello');

const t = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(t);

const o = `This is what we know about the avocado : ${t}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', o);
console.log('file written');