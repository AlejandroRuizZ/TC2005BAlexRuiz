const express = require('express');

const router = express.Router();
const arbolesController = require('../controllers/arboles_controller');
const isAuth = require('../controllers/is-auth.js')

router.get('/Alex', isAuth, arbolesController.Alex);

router.get('/', isAuth,arbolesController.listar);

router.get('/nuevo', isAuth, arbolesController.get_nuevo);

router.post('/nuevo',arbolesController.post_nuevo);

module.exports = router;