const { check, validationResult, body} = require("express-validator");

module.exports = [ 
    check('email').isEmail().withMessage('Email Invalido'),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener un minimo de 8 caracteres')
]