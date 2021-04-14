var express = require("express");
var router = express.Router();
var apisController = require("../controllers/apisController");

//PRODUCTOS
router.get("/products", apisController.products);
router.get("/products/:id", apisController.productDetail);

//USUARIOS
router.get("/users", apisController.users);
router.get("/users/:id", apisController.userDetail);

//CATEGORIAS
router.get("/categories", apisController.categories);

module.exports = router;
