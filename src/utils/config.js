const path = require('path');

const dbFolder = path.resolve(__dirname, '../../db/');
const imageFolder = path.resolve(dbFolder, 'img');
const dbDumpFile = path.resolve(dbFolder, 'dump.json');

module.exports = {
    PORT: 8080,
    dbFolder,
    imageFolder,
    dbDumpFile,
}