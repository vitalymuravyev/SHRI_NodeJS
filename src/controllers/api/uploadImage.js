const mutler = require('multer');
const { imageFolder } = require('../../utils/config');

const upload = mutler({ dest: imageFolder });

module.exports = (req, res) => {
    try {
        res.json({id: req.file.id});
     } catch (err) {
         res.send(400)
     }
}
