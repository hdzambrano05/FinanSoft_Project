var express = require('express');
var router = express.Router();

const proveedoresController = require('../controllers').proveedoresController;

router.get('/', proveedoresController.list);
router.get('/:id', proveedoresController.getById);

module.exports = router;