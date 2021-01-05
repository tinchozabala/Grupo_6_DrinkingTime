var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController.js');
//const { route } = require('./index.js');


router.get('/cart', productsController.cart)
// 1. /products (GET) Listado de productos
router.get('/', productsController.catalog);
// 2. /products/create (GET) Formulario de creación de productos
router.get('/create', productsController.create)
// 3. /products/ :id (GET) Detalle de un producto particular
router.get('/:id', productsController.productDetail)
// 4. /products (POST) Acción de creación (a donde se envía el formulario)

// 5. /products/ :id /edit (GET) Formulario de edición de productos
router.get('/:id/edit', productsController.edit)
// 6. /products/ :id (PUT) Acción de edición (a donde se envía el formulario):
 
// 7. /products/ :id (DELETE) Acción de borrado









//primero detalle de producto
//router.get('/', productsController.productDetail);

// listado de productos - catalogo
// formulario de alta de productos
// formulario editar productos
// eliminar producto - no necesita vista pero si un method

//router.get('/', function(req, res, next) {
    //res.render('productCart')
  //});

// Render hay que mandar una vista
//router.get('/:id', function (req, res){
   // res.render('')
//})

module.exports = router;