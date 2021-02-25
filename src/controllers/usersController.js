const fs = require ('fs')
const path = require ('path')
const bcrypt = require("bcrypt");
const db= require("../database/models")

// LECTURA DE ARCHIVOS JSON PARA 
const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');
let users = fs.readFileSync(path.resolve(usersFilePath), {encoding : 'utf8'})
users = JSON.parse(users)

const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');
let products = fs.readFileSync(path.resolve(productsFilePath), {encoding : 'utf8'})
products = JSON.parse(products)

// EXPRESS VALIDATOR
const { check, validationResult, body} = require("express-validator");
const { name } = require('ejs');
const Sequelize= require('sequelize');
var op = Sequelize.Op

// FUNCION PARA ENCONTRAR EMAIL
function getUserByEmail(email) {
    return users.find((user) => user.email == email)
};


    //CONTROLADORES DE USUARIO


const usersController = {

    search: (req, res, next) => {
        db.Products.findAll({
            where:{
                name : req.query.search
            }
        })
        .then((resultado)=>{
            res.render('search', {resultado: resultado})
        })
    },

    index : (req,res,next) => {
        res.render('index')
    },

    login : (req,res,next) => {
        res.render('login') 
    },

    processLogin: (req, res) => {
        //RECORDAR ESTA PAGINA DEBE REDIRECIONAR A PROFILE/:ID

        let errors = validationResult(req);
        db.Customers.findOne({
            where: {
                email: req.body.email,
            }
        })
        .then((resultado)=> {
            let persona = resultado;
            if (persona != undefined){
            if (bcrypt.compareSync(req.body.password, persona.password)){
                req.session.usuario = persona
                if (req.body.remember) {
                    res.cookie('usuario', persona.email, {maxAge: 2592000000 })
                }
                res.redirect('/profile/'+ resultado.id);
            } else {
                res.render ('login',{errors:errors})
            };
        }else{
            res.render('login', {errors:errors})
        }
        })
        .catch((e)=>{
            console.log(e);
        })
        
    },

    register : (req, res, next) => {
        res.render('register')
    },

    createUser : (req, res) => {
        //RECORDAR ESTA PAGINA DEBE REDIRECCION AL LOGIN 
        //PENDIENTE
        db.Customers.create({
        email: req.body.email,
        name : req.body.name,
        password: bcrypt.hashSync(req.body.password, 10),
        shipping_addres: null, 
        avatar: null,
        telephone: null,
        birth_date: req.body.nacimiento
        })
        .then((resultado)=>{
            res.redirect("/login")
        })
        .catch((e)=>{
            console.log(e);
        })
      
    //    let validator = validationResult(req)
    //    let usuario = {
    //        id : users.length ++,
    //        email : req.body.email,
    //        password : bcrypt.hashSync(req.body.password, 10),
    //        confirmPass : bcrypt.hashSync(req.body.confirmPass, 10),
    //        name : req.body.name,
    //        image : req.files[0].filename,
    //       edad : req.body.nacimiento,
    //         direccion : null,
    //        telefono : null,
    //        }
    //        users.push(usuario)
    //        let usersJson = JSON.stringify(users);
    //        
    //        fs.writeFileSync(usersFilePath, usersJson);
    //        
    //        res.redirect('/login')
    },

    profile : function (req, res, next){
        let perfil = db.Customers.findByPk(req.params.id);
        Promise.all([perfil])
            .then(function([customer]){
                res.render ('profile', {Customers : customer})
            })
            .catch((e)=>{
                console.log(e);
            })
    },


    profileView : function (req, res, next){
        let perfil = db.Customers.findByPk(req.params.id);
        Promise.all([perfil])
            .then(function([customer]){
                res.render ('profileEdit', {Customers : customer})
            })
            .catch((e)=>{
                console.log(e);
            })
    
    },
        //     let perfil = db.Customers.findByPk(req.params.id);
        //         .then(function(customer){
        //             res.render('profile', {customer : customer[perfil]})
        //         })
        //},
    profileEdit : (req, res) => {
        db.Customers.update({
            name : req.body.name,
            email: req.body.email,
            birth_date: req.body.edad,
            shipping_addres: req.body.direccion, 
            telephone: req.body.telefono,
            
            }, {
                where : {
                    id : req.params.id
                }
            })
            .then(function(){
                res.redirect ("/profile/" + req.params.id)
            })
            
    }
        //         function usuarioEncontrado(users){
        //         req.body.id = req.params.id
        //     };
        //     function usuarioModificado(){
        //         if (users.find(usuarioEncontrado)){
        //         console.log(usuarioEncontrado)
        //             name = req.body.name,
        //             email = req.body.email,
        //             edad = req.body.nacimiento,
        //             ciudad = req.body.ciudad,
        //             direccion = req.body.direccion,
        //             codigoPostal = req.body.codigoPostal,
        //             telefono = req.body.telefono
        //     }
        // }
        //     let usuarioEditJson = JSON.stringify(users);
        //     fs.writeFileSync(usersFilePath, usuarioEditJson);
        //     res.redirect(this.profile)
        // }   
        ,
        productList: (req,res) =>{
            let cat = db.Categories.findAll()
            let bra = db.Brands.findAll()
            let resultado = db.Products.findAll()

            .then(([cat, bra, resultado])=>{
                return res.render("productUsersList", {cat: cat, bra: bra, resultado : resultado})
            })
            .catch((e)=>{
            console.log(e);
            })
        },    
        productDelete: (req,res) => {
          db.Products.destroy({
            where : {
              id : req.params.id
            }
          })
          .then(function(){
            res.redirect("/profile/productlist");
          })
         
        }  
    } 


module.exports = usersController

