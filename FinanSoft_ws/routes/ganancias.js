var express = require('express');
var router = express.Router();

const gananciasController = require('../controllers').gananciasController;

router.get('/', gananciasController.list);
router.get('/:id', gananciasController.getById);
router.post('/', gananciasController.add);

module.exports = router;