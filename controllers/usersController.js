const fs = require ('fs')
const path = require ('path')
const bcrypt = require("bcrypt");
const productsController = require('./productsController')
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
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
    register : (req, res, next) => {
        res.render('register')
    },
    createUser : (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()){
            users.push({
                email : req.body.email,
                password : bcrypt.hashSync(req.body.contraseña, 10),
                confirmPass : bcrypt.hashSync(req.body.confirm, 10),
                name : req.body.name,
                Edad : req.body.nacimiento,
            })
            let user = JSON.stringify(users);
            fs.writeFileSync(usersFilePath, user);

            res.send('Gracias')
            }
        }
    
    
} 

module.exports = usersController



//let laBusqueda = req.query.search;
      //let results = [];
      //for (let i = 0; i<products.length; i++){
      //  if (products[i].name.includes(laBusqueda)){
      //    results.push(products[i]); 
      //  }