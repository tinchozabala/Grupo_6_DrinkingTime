const fs = require ('fs')
const path = require ('path')
const bcrypt = require("bcrypt");

const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');
let users = fs.readFileSync(path.resolve(usersFilePath), {encoding : 'utf8'})
users = JSON.parse(users)

const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');
let products = fs.readFileSync(path.resolve(productsFilePath), {encoding : 'utf8'})
products = JSON.parse(products)

const { check, validationResult, body} = require("express-validator");

console.log(users);

const usersController = {
    search :  (req, res, next) => {
       
        let laBusqueda = req.query.search;

        let productsResults = [];

        for (let i = 0 ; i < products.length; i ++) {
            if (products[i].nombre.includes(laBusqueda)){
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
    processLogin: (req, res, next) => {

        let errors = validationResult(req);
        let usuarioLogeado;
        if  (errors.isEmpty()){
            for (let i = 0; i< users.length; i++) {
                if (users[i].email == req.body.email){
                    if (users[i].password == req.body.password) {
                        usuarioLogeado = usersJSON[i];
                        req.session.usuarioLogeado = usuarioLogeado
                        return res.redirect('/')
                    } else {
                        return res.render('login',{errors:errors})
                    }
                }  
            } 
        } else {return res.redirect('/login')}
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