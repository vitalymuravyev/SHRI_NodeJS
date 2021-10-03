const fs = require('fs');
const { replaceBackground } = require('backrem');
const path = require('path');

const db = require('../../entities/Database');
const { imageFolder } = require('../../utils/config');


module.exports = (req, res) => {
    const { front, back, color, threshold } = req.query;

    // const frontFile = ;
    
    const frontImg = fs.createReadStream(`${imageFolder}/${db.getFileName(front)}`);
    const backImg = fs.createReadStream(`${imageFolder}/${db.getFileName(back)}`);
    const colors = color.split(',');

    replaceBackground(frontImg, backImg, colors, threshold)
        .then((readableStream) => {
            const writableStream = fs.createWriteStream(
                path.resolve(imageFolder, "./result.jpg")
            );
            res.setHeader('Content-type', 'image/jpeg');
            readableStream.pipe(res);
        })
}