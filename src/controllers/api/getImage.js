const fs = require('fs');
const db = require('../../entities/Database');
const { imageFolder } = require('../../utils/config');
// const mime = require('')

module.exports = (req, res) => {
    const id = req.params.id;
    const file = `${imageFolder}/${db.getFileName(id)}`;
    res.setHeader('Content-type', 'image/jpeg');

    const fileStream = fs.createReadStream(file);
    fileStream.pipe(res);
}
