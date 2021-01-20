const fs = require ('fs')
const path = require ('path')
const bcrypt = require("bcrypt");

const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');
let users = fs.readFileSync(path.resolve(usersFilePath), {encoding : 'utf8'})
users = JSON.parse(users)

const { check, validationResult, body} = require("express-validator");


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
    createUser : (req, res) => {
        let validator = validationResult(req)
        let usuario = {
            id : 1,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.contraseña, 10),
            confirmPass : bcrypt.hashSync(req.body.confirm, 10),
            name : req.body.name,
            Edad : req.body.nacimiento,
            }
            users.push(usuario)
            let usersJson = JSON.stringify(users, null, 2);
            fs.writeFileSync(usersFilePath, usersJson);
            
            res.render ('register', {errors : validator.array()})
            console.log(usuario);

        }
    
    
} 

module.exports = usersController



//let laBusqueda = req.query.search;
      //let results = [];
      //for (let i = 0; i<products.length; i++){
      //  if (products[i].name.includes(laBusqueda)){
      //    results.push(products[i]); 
      //  }