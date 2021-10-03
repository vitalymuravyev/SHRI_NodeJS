const { EventEmitter } = require('events');
// const { existsSync } = require('fs');
const { writeFile } = require('fs/promises');
const { dbDumpFile } = require('../utils/config');
const { prettifyJsonToString } = require('../utils/prettifyJsonToString');
const Img = require('./Image')

class Database extends EventEmitter {
  constructor() {
    super();
    this.ids = {};
  }

  async init() {
    const dump = require(dbDumpFile);

    if (typeof dump.ids === 'object') {
      this.ids = {};

      for (let id in dump.ids) {
        const img = dump.ids[id];

        this.ids[id] = new Img(img.id, img.created, img.size);
      }
    }
  }

  async insert(file) {
    this.ids[file.id] = file;
    this.emit('changed');
  }

  async remove(imgId) {
    const imgRaw = this.ids[imgId];
    const img = new Img(imgRaw.id, imgRaw.created, imgRaw.size, imgRaw.fileName);

    await img.removeImage();

    delete this.ids[imgId];

    this.emit('changed');
    return imgId;
  }

  find() {
      const allFiles = Object.values(this.ids);

      return allFiles;
  }

  toJSON() {
      return {
          ids: this.ids
      }
  }
}

const db = new Database();

db.init();

db.on('changed', () => {
    writeFile(dbDumpFile, prettifyJsonToString(db.toJSON()));
})

module.exports = db;