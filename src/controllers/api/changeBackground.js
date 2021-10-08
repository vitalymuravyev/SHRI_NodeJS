const fs = require('fs');
const { replaceBackground } = require('backrem');
const path = require('path');

const db = require('../../entities/Database');
const { imageFolder } = require('../../utils/config');

module.exports = (req, res) => {
    // опять же из опыта коллег, валидация параметров
    const { front, back, color, threshold } = req.query;

    const frontImg = fs.createReadStream(`${imageFolder}/${db.getFileName(front)}`);
    const backImg = fs.createReadStream(`${imageFolder}/${db.getFileName(back)}`);
    const colors = color.split(',');

    // не сразу заметил, другие коллеги делают тут проверку на то что чтобы изображения были одного размера
    replaceBackground(frontImg, backImg, colors, threshold)
        .then((readableStream) => {
            // чот не пойму зачем writableStream
            const writableStream = fs.createWriteStream(
                path.resolve(imageFolder, "./result.jpg")
            );

            res.setHeader('Content-type', 'image/jpeg');
            readableStream.pipe(res);
        })
}