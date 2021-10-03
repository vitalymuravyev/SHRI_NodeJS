const path = require('path');
const { imageFolder } = require('../utils/config');

const { generateId } = require('../utils/idGenerator');
const { deleteFile, uploadFile } = require('../utils/fs');
const { imageToDisk } = require('../utils/imageToDisk');

module.exports = class Image {
    constructor(id, created, fileName) {
        this.id = id || generateId();
        this.created = created || Date.now();
        this.fileName = fileName || '';
    }

    // async saveFile(content) {
    //     console.log('dsfdfds');
    // }

    async removeImage() {
        await deleteFile(path.resolve(imageFolder, this.fileName))
    }
}