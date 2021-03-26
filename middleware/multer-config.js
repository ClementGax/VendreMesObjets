const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    // Remplacer les espaces dans le nom du fichier par des underscores
    const name = file.originalname.split(' ').join('_');
    // Récuperer l'extension du fichier
    const extension = MIME_TYPES[file.mimetype];
    // Modification du nom du fichier (nom d'origine + date + extension)
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({ storage }).single('image');
