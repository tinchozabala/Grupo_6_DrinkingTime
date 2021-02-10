const { ifError } = require('assert')
const fs = require ('fs')
const path = require ('path')
const db = require("../database/models");


const productsController ={
      //Vista del listado de productos
    catalog : function(req, res, next) {
      db.Products.findAll()
      .then((products)=>{
        return res.render('catalog', {products})
      })
      .catch((e)=>{
        console.log(e);
      })
      },
      // Vista del detalle de Productos
    productDetail : function(req, res, next) {
      db.Products.findOne({
        where: {
          id: req.params.id
        }
      })
      .then((resultado)=> {
        res.render('productDetail', {resultado : resultado})
      })
      .catch((e)=>{
        console.log(e);
      })
      },  
      //Vista de Creacion de Productos
    create : (req, res, next) => {
      db.Categories.findAll()
      .then(function(categories){
        return res.render('create', {categories: categories}) 
      })
      
      },  
      // Metodo de creacion de productos
    productCreate: (req, res, next) => { 
      db.Products.create({
        name : req.body.name,
        category : req.body.category,
        product_detail : req.body.detail,
        price : req.body.price
        })
        .then((resultado)=>{
            res.redirect("/login")
        })
        .catch((e)=>{
            console.log(e);
        })
    
      },

      //Edicion de productos
    edit :  (req, res, next) => {
      let edit = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.files[0].filename,
        categoria: req.body.categoria,
        marca: req.body.marca,
        precio: req.body.precio
      }
      let editJson = JSON.stringify (products);
      res.redirect('products')
      }, 

    productEdit : (req, res, next) => {
        res.render ("edit")
      },
    cart :  (req, res, next) => {
      res.render('productCart')
      },   
    delete: (req,res) => {
      res.render ("edit")
    },    
    
}


module.exports = productsController