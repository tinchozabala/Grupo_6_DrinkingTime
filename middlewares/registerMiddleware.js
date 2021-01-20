let { check, validationResult, body} = require("express-validator");
const path = require('path');
const fs = require("fs");
let registerMiddleware = [

  check("email").isEmail().withMessage("Campo obligatorio"),
  check("password").isLength({min: 8}).withMessage("Debes ingresar por lo menos 8 caracteres"),
  check("confirmPass").isLength({min: 8}).withMessage("Debes ingresar por lo menos 8 caracteres"),
  check("name").isLength({min: 8}).withMessage("Este campo es obligatorio"),
  check("nacimiento").isDate().isLength({min: 6}).withMessage("Este campo es obligatorio"),
  
 
]

module.exports = registerMiddleware;