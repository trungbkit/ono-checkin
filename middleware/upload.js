const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './uploads/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    crypto.pseudoRandomBytes(16, (err, raw) => {
      const ext = path.extname(file.originalname).toLowerCase();
      cb(null, `${raw.toString('hex') + Date.now()}${ext}`);
    });
  },
});

const upload = multer({
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeTypes = /image\/jpeg|image\/jpg|image\/png/;
    const mimeName = mimeTypes.test(file.mimetype);
    if (extname && mimeName) return cb(null, true);
    return cb(`FiletypeError: File upload only supports the following filetypes - ${fileTypes}`);
  },
  storage,
});

module.exports = upload;
