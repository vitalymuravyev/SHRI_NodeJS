const path = require('path');
const { imageFolder } = require('../utils/config');

const { generateId } = require('..utils/idGenerator');
const { deleteFile, uploadFile } = require('../utils/fs');

module.exports = class Image {
    constructor(id, createdAt) {
        this.id = id || generateId();
        this.createdAt = createdAt || Date.now();
        this.fileName = `img-${this.id}.jpg`;
    }

    async saveFile(content) {
        await uploadFile(path.resolve(imageFolder, this.fileName), content);
    }

    async removeImage() {
        await deleteFile(path.resolve(imageFolder, this.fileName));
    }
}