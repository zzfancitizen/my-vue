const fsFacadeDefiner = require('./fsFacad');

if (process.argv.length < 4) throw 'Please input package name & sidePage path';
let fsFacade = new fsFacadeDefiner(process.argv[process.argv.length - 2]);
fsFacade.writeObjectToFile(process.argv[process.argv.length - 1]);

