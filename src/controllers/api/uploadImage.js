const db = require('../../entities/Database');
const Img = require('../../entities/Image');

module.exports = async (req, res) => {
    try {
        const { id, created, size, originalname } = req.file;
        const newFile = new Img(id, created, size, originalname);

        await db.insert(newFile)

        res.json({id: req.file.id});
     } catch (err) {
         console.log(err);

         res.sendStatus(400)
     }
}
