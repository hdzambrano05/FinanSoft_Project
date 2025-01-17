var express = require('express');
var router = express.Router();

const comprasController = require('../controllers').comprasController;

router.get('/', comprasController.list);
router.get('/:id', comprasController.getById);

module.exports = router;    
