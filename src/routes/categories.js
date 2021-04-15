var express = require('express');
const { route } = require('../routes/products');
var router = express.Router();
var categoriesController = require('../controllers/categoriesController');
const userLoggedMidleware = require('../middlewares/userLoggedMidleware.js');


//PROMOCIONES
router.get('/promociones', categoriesController.promociones);

//Cervezas
router.get('/cervezas', categoriesController.cervezas);

//Vinos
router.get('/vinos', categoriesController.vinos);

//Aperitivos
router.get('/aperitivos', categoriesController.aperitivos);

//Aperitivos
router.get('/espirituosas', categoriesController.espirituosas);

module.exports = router;