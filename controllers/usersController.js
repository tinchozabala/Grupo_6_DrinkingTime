const fs = require ('fs')
const path = require ('path')
const bcrypt = require("bcrypt");

const usersFilePath = path.join(__dirname, '../data/users.json');

const { check, validationResult, body} = require("express-validator");


let products = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), {encoding : 'utf8'})
let productsJSON = JSON.parse(products)

const usersController = {
    search :  (req, res, next) => {
       
        let laBusqueda = req.query.search;

        let productsResults = [];

        for (let i = 0 ; i < productsJSON.length; i ++) {
            if (productsJSON[i].nombre.includes(laBusqueda)){
                productsResults.push(products[i]);
            }
        }

        res.render('search', {productsResults:productsResults})
    },
    index : (req,res,next) => {
        res.render('index')
    },
    login : (req,res,next) => {
        res.render('login') 
    },
    processLogin : (req,res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()){

        } else {
            res.render ("login", {errors : errors.errors})
        }
    },

    register : (req, res, next) => {
        res.render('register')
    },
    createUser : (req, res, next) => {
        let errors = validationResult(req)
        if (errors.isEmpty()){
            users.push({
                email : req.body.email,
                password : bcrypt.hashSync(req.body.contraseña, 10),
                confirmPass : bcrypt.hashSync(req.body.confirm, 10),
                image : req.files[0].filename,
                name : req.body.name,
                Edad : req.body.nacimiento,
            })
            let user = JSON.stringify(users);
            fs.writeFileSync(usersFilePath, user);

            res.send('Gracias')
            }
            users.push(usuario)
            let usersJson = JSON.stringify(users);
            fs.writeFileSync('./data/users.json', usersJson);
            
            res.redirect ('login')

        }
    
    
} 

module.exports = usersController



//let laBusqueda = req.query.search;
      //let results = [];
      //for (let i = 0; i<products.length; i++){
      //  if (products[i].name.includes(laBusqueda)){
      //    results.push(products[i]); 
      //  }