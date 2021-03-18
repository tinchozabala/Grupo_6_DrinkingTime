const bcrypt = require("bcrypt");
const db= require("../database/models")
const Sequelize= require('sequelize');

// EXPRESS VALIDATOR
const { check, validationResult, body} = require("express-validator");
const { name } = require('ejs');
const { log } = require("debug");

var op = Sequelize.Op

// FUNCION PARA ENCONTRAR EMAIL
function getUserByEmail(email) {
    return users.find((user) => user.email == email)
};

//CONTROLADORES DE USUARIO
const usersController = {
    //Funcion para la barra de busqueda

    
    search: (req, res, next) => {
        db.Products.findAll({
            where:{
                name : {
                    [op.like] : '%' + req.query.search + '%'
                }
            },
            include: ['category']
        })
        .then((resultado)=>{
            res.render('search', {resultado: resultado})
        })
        .catch((e)=>{
            console.log(e);
        })
    },

    //Funcion para ir a la vista principal
    index : (req,res,next) => {
        res.render('index')
    },

    //Funcion para ir a vista de login
    login : (req,res,next) => {
        res.render('login') 
    },

    // Funcion para loguearse en al pagina
    processLogin: (req, res) => {
        //RECORDAR ESTA PAGINA DEBE REDIRECIONAR A PROFILE/:ID
        let errors = validationResult(req);
        if (errors.isEmpty()) {
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
        } else {
            return res.render("login", {errors : errors.errors})
        }   
    },

    //Funcion para ir a la vista de registro
    register : (req, res, next) => {
        res.render('register')
    },

    //Funcion para hacer el registro exitoso 
    createUser : (req, res) => {
        let errors = validationResult(req)
        console.log(errors)
        if (errors.isEmpty()) {
            db.Customers.create({
            email: req.body.email,
            name : req.body.name,
            password: bcrypt.hashSync(req.body.password, 10),
            image: req.files[0].filename,
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
        } else {
            res.render("register", {errors : errors.errors})
        }
    },

    //Funcion para ir a vista perfil
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

    //Funcion para ir a vista de perfil 
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
    
    // Funcion para vista de edicion de peril del usuario
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
            
    },

    //Funcion para ir a vista del listado de producto para administradores
    productList: (req,res) =>{

        let resultado = db.Products.findAll({
            include: ['category', 'brand']
        });

        Promise.all([resultado])
        .then(function([resultado]){
           //return res.json (resultado)
        return res.render('productUsersList', {resultado: resultado})
        })
        .catch((e)=>{
        console.log(e);
        })
        },    

    //Funcion para eliminar productos    
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

