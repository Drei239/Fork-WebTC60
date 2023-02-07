// File sử dụng modules ở file 1
const createModules = require('./04-create-modules-1');

console.log('Modules dc import 1');
console.log(createModules);

console.log('Module hien tai - tuc la cua file 04-create-modules-2');
console.log(module);

const myDateTime = createModules.getMyDateTime();
const myDirName = createModules.getDirName();
const myAge = createModules.myAge;

console.log('myDateTime: ', myDateTime);
console.log('myDirName: ', myDirName);
console.log('myAge: ', myAge);