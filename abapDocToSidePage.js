const fsFacadeDefiner = require('./fsFacad');

let fsFacade = new fsFacadeDefiner('$test_trpa_impairment');
fsFacade.writeObjectToFile('./sidePage.json');
