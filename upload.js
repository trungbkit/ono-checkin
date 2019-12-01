const path = require('path');

const uploadImage = (req, res) => {
  try {
    const files = req.files.image;
    res.send({ image: `/upload/${files[0].filename}` });
  } catch (e) {
    res.send(e);
  }
}

const getImage = (req, res) => {
  try {
    const { filename } = req.params;
    const file = path.join(__dirname, 'uploads', filename);
    res.sendFile(file);
  } catch (e) {
    res.send('Get file error', error);
  }
}

module.exports = { uploadImage, getImage };
