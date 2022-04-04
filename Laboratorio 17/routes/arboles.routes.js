const express = require('express');

const router = express.Router();
const arbolesController = require('../controllers/arboles_controller');



router.get('/Alex', arbolesController.Alex);

router.get('/', arbolesController.listar);

router.get('/nuevo', arbolesController.get_nuevo);

router.post('/nuevo', arbolesController.post_nuevo);

module.exports = router;