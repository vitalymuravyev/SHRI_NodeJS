const path = require('path');

const dbFolder = path.resolve(__dirname, '../../db/');
const imageFolder = path.resolve(dbFolder, 'img');

module.exports = {
    PORT: 8080,
    dbFolder,
    imageFolder,
}