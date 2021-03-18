const { check, validationResult, body} = require("express-validator");
const db = require("../database/models")

module.exports = [ 
    check('name').isLength({min:5}).withMessage("Este campo es obligatorio"),
    check('product_detail').isLength({min: 20}).withMessage("La descripcion del producto debe tener minimo 20 caracteres"),
    check('price').isNumeric({min: 0}).withMessage("Debe asignar un precio para el producto"),
    check('image').notEmpty().withMessage('Este campo es obligatorio'),
    check('category').notEmpty().withMessage("Debe seleccionar Categoria"),
    check('brand').notEmpty().withMessage("Debe seleccionar Marca")
    

]