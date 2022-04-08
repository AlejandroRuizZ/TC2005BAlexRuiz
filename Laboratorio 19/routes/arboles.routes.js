const express = require('express');

const router = express.Router();
const arbolesController = require('../controllers/arboles_controller');
const isAuth = require('../controllers/is-auth.js')
const RBdisplay = require('../controllers/RBdisplay')

router.get('/Alex', isAuth, arbolesController.Alex);

router.get('/nuevo', isAuth, RBdisplay);

router.post('/nuevo', isAuth, arbolesController.post_nuevo);

router.get('/:arbol_id', isAuth, arbolesController.displayOne);

router.get('/', isAuth,arbolesController.listar);

module.exports = router;