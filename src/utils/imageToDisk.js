const multer = require('multer');

const { generateId } = require('./idGenerator');
const { imageFolder } = require('./config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      // '/files' это директория в которую будут сохранятся файлы 
      cb(null, imageFolder);
    },
    filename: (req, file, cb) => {
  // Возьмем оригинальное название файла, и под этим же названием сохраним его на сервере
      file.id = generateId();
      file.created = Date.now();
      const { originalname } = file
      cb(null, originalname)
    }
})

const upload = multer({ storage: storage });

module.exports = {
    imageToDisk: upload.single('image')
}