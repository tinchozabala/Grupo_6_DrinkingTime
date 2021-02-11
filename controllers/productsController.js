const fs = require ('fs')
const path = require ('path')
const db = require("../database/models");


const productsController ={
      //Vista del listado de productos
    catalog : function(req, res, next) {
      db.Products.findAll()
      .then((resultado)=>{
        res.render("catalog", {resultado:resultado})
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
        product_detail : req.body.product_detail,
        brand : req.body.brand,
        price : req.body.price
        })
        .then((resultado)=>{
          res.redirect("products")
      })
      .catch((e)=>{
          console.log(e);
      })
    },
      //Edicion de productos
    edit :  (req, res, next) => {
      db.Products.update({
        name : req.body.name,
        category : req.body.category,
        product_detail : req.body.detail,
        price : req.body.price
      },{
      where: {
        id: req.params.id
      }
      })
      res.redirect("products")
      }, 

    productEdit : (req, res, next) => {
        res.render ("edit")
      },
    cart :  (req, res, next) => {
      res.render('productCart')
    },    
    productDelete: (req,res) => {
      db.Products.destroy({
        where : {
          id : req.params.id
        }
      })
      res.redirect("products");
    }
}


module.exports = productsController