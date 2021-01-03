var express = require('express');
var router = express.Router();
const productosControlador = require ('../controllers/controller')

/* GET home page. */
router.get('/', productosControlador.index);

module.exports = router;