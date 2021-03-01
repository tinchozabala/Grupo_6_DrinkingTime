const { check, validationResult, body} = require("express-validator");
const db = require("../database/models")

module.exports = [ 
    check('email').isEmail().withMessage('Email Invalido').custom(async function(email){
        let nuevoRegistro = await db.Customers.findOne( {
            where : {
                email : email
            }
        });
        if (nuevoRegistro){
            throw new Error ("Este email ya fue registrado")
        }
    }),

    check('password').isLength({min:8}).withMessage('La contraseña debe tener un minimo de 8 caracteres'),

    check('name').isLength({min:2}).withMessage('Este campo es obligatorio'),
    
]