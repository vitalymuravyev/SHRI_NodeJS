const multer = require('multer');

const { generateId } = require('./idGenerator');
const { imageFolder } = require('./config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, imageFolder);
    },
    filename: (req, file, cb) => {
      file.id = generateId();
      file.created = Date.now();
      const { originalname } = file;
      cb(null, originalname)
    }
})

const upload = multer({ storage: storage });

module.exports = {
    imageToDisk: upload.single('image')
}