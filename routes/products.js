var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController.js');
const path = require ("path");
const multer = require('multer');
const userLoggedMidleware = require('../middlewares/userLoggedMidleware.js');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb (null, "./public/images")
    },
    filename: (req, file, cb) => {
      cb (null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
  })
var upload = multer ({ storage: storage });
//const { route } = require('./index.js');



// 1. /products (GET) Listado de productos
router.get('/', productsController.catalog);

router.get('/cart', userLoggedMidleware, productsController.cart);

// 2. /products/create (GET) Formulario de creación de productos
router.get('/create', userLoggedMidleware, productsController.create);
// 3. /products/ :id (GET) Detalle de un producto particular
router.get('/:id', productsController.productDetail);
// 4. /products/create (POST) Acción de creación (a donde se envía el formulario) 
router.post ("/", upload.any(), productsController.productCreate);
// 5. /products/ :id /edit (GET) Formulario de edición de productos
router.get('/:id/edit',userLoggedMidleware, productsController.productEdit);
// 6. /products/ :id (PUT) Acción de edición (a donde se envía el formulario): 
router.put('/:id/edit',userLoggedMidleware, productsController.edit)


module.exports = router;