var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController.js');
//const { route } = require('./index.js');

// 1. /products (GET) Listado de productos
router.get('/', productsController.catalog);

router.get('/cart', productsController.cart);

// 2. /products/create (GET) Formulario de creación de productos
router.get('/create', productsController.create);
// 3. /products/ :id (GET) Detalle de un producto particular
router.get('/:id', productsController.productDetail);
// 4. /products (POST) Acción de creación (a donde se envía el formulario)
router.post ("/products", productsController.productCreate);

// 5. /products/ :id /edit (GET) Formulario de edición de productos
router.get('/:id/edit', productsController.edit);
// 6. /products/ :id (PUT) Acción de edición (a donde se envía el formulario): 
router.put('/:id/edit', productsController.edit)
// 7. /products/ :id (DELETE) Acción de borrado
router.delete('/:id/delete',productsController.delete)
//Funciones del buscador



module.exports = router;