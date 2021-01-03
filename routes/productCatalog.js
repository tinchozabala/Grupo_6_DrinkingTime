var express = require('express');
var router = express.Router();
const productosControlador = require ('../controllers/controller')
/* GET home page. */
router.get('/', productosControlador.products);

module.exports = router;