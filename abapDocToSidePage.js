const fsFacadeDefiner = require('./fsFacad');


let fsFacade = new fsFacadeDefiner(process.argv[process.argv.length - 2]);
fsFacade.writeObjectToFile(process.argv[process.argv.length - 1]);

