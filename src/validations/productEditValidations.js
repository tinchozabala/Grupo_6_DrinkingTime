const { check, validationResult, body} = require("express-validator");
const db = require("../database/models")

module.exports = [
    check('name').isLength({min:5}).withMessage("Este campo es obligatorio"),

    check("price").isLength({min: 3}).withMessage("Este campo es obligatorio"),

    check("image").notEmpty().withMessage("Debe seleccionar un archivo"),

    check('product_detail').isLength({min: 20}).withMessage("La descripcion del producto debe tener minimo 20 caracteres"),

    check('category_id').notEmpty().withMessage("Debe seleccionar Categoria"),

    check('brand_id').notEmpty().withMessage("Debe seleccionar Marca")
]
