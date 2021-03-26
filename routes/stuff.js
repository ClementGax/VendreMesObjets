const express = require ('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

// Routes POST, PUT, DELETE, GET
// "auth" permet de passer dans le middleware qui vérifie le token jwt avant de passer aux routes
// "multer" permet à l'utilisateur d'envoyer une image
router.post('/', auth, multer, stuffCtrl.createThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
router.get('/:id', auth, stuffCtrl.getOnething);
router.get('/', auth, stuffCtrl.getAllThings);

module.exports = router;
