const testmodule1 = require('./testmodule1');
const testmodule2 = require('./testmodule2');

const t = new testmodule1();
console.log(t.add(5, 4));
console.log(testmodule2.multiply(2, 2));

const testmodule3 = require('./testmodule3');
testmodule3(); // loading 
testmodule3(); // only caching
testmodule3(); // only caching