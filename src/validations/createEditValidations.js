const { check, validationResult, body} = require("express-validator");
const db = require("../database/models")

module.exports = [ 
    check('name').isLength({min:5}).withMessage("Este campo es obligatorio"),
    check('product_detail').isLength({min: 20}).withMessage("La descripcion del producto debe tener minimo 20 caracteres"),
    check('category').notEmpty().withMessage("Debe seleccionar Categoria")
    
    //PENDIENTE AGREGAR CHECK DE IMAGEN ARCHIVO VALIDO

]