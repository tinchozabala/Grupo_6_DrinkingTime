var express = require('express');
const { route } = require('../routes/products');
var router = express.Router();
var categoriesController = require('../controllers/categoriesController');
const userLoggedMidleware = require('../middlewares/userLoggedMidleware.js');


//PROMOCIONES
router.get('/promociones', userLoggedMidleware, categoriesController.promociones);

//Cervezas
router.get('/cervezas', userLoggedMidleware, categoriesController.cervezas);

//Vinos
router.get('/vinos', userLoggedMidleware, categoriesController.vinos);

//Aperitivos
router.get('/aperitivos', userLoggedMidleware, categoriesController.aperitivos);

//Aperitivos
router.get('/espirituosas', userLoggedMidleware, categoriesController.espirituosas);

module.exports = router;