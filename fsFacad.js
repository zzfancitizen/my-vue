const fs = require('fs');
const path = require('path');
const abapDocFolder = './abapdoc/abapdoc/';
const utf8 = 'utf-8';

class fsFacade {
    constructor(packageName) {
        this.files = [];
        this._getAllObjects(fsFacade._concatenate(packageName))
    }

    _getAllObjects(folderPath) {
        let files = fs.readdirSync(folderPath, {encoding: utf8, withFileTypes: true});
        files.forEach((file) => {
            let fileDir = path.join(folderPath, file);
            let info = fs.statSync(fileDir);
            if (info.isDirectory()) {
                this._getAllObjects(fileDir)
            } else {
                this.files.push(file)
            }
        })
    }

    writeObjectToFile(writeToPath) {
        if (this.files === undefined || this.files.length === 0) throw 'Empty files';
        fs.readFile(writeToPath, utf8, (err, data) => {
            if (err) throw err;
            let fileObjs = this.files.map(id => ({id})); // add id as header
            let dataArr = JSON.parse(data);
            fileObjs.forEach((fileObj) => {
                dataArr.push(fileObj)
            });

            let json = JSON.stringify(dataArr);
            fs.writeFile(writeToPath, json, (err) => {
                if (err) throw err;
            })
        })
    }

    static _concatenate(packageName) {
        return path.join(abapDocFolder, packageName)
    }
}

module.exports = fsFacade;

