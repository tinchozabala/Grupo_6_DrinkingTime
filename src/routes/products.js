var express = require("express");
var router = express.Router();
var productsController = require("../controllers/productsController.js");
const path = require("path");
const multer = require("multer");
const userLoggedMidleware = require("../middlewares/userLoggedMidleware.js");
const productEditValidations = require("../validations/productEditValidations.js");
const createEditValidations = require("../validations/createEditValidations");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage });
//const { route } = require('./index.js');

// 1. /products (GET) Listado de productos
router.get("/", productsController.catalog);

router.get("/cart", productsController.cart);

// 2. /products/create (GET) Formulario de creación de productos
router.get("/create", productsController.create);
// 3. /products/ :id (GET) Detalle de un producto particular
router.get("/:id", productsController.productDetail);
// 4. /products/create (POST) Acción de creación (a donde se envía el formulario)
router.post(
  "/",
  upload.any(),
  createEditValidations,
  productsController.productCreate
);
// 5. /products/ :id /edit (GET) Formulario de edición de productos
router.put(
  "/edit/:id",
  upload.any(),
  productEditValidations,
  productsController.edit
);
router.get("/edit/:id", productsController.productEdit);
// 6. /products/ :id (PUT) Acción de edición (a donde se envía el formulario):

module.exports = router;
