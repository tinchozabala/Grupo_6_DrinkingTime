const { ifError } = require('assert')
const fs = require ('fs')
const path = require ('path')
const db = require("../database/models");

let products = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), {encoding : 'utf-8'})
products = JSON.parse(products)



const productsController ={
    catalog : function(req, res, next) {
      return res.render('catalog', {products})
      },
    create : (req, res, next) => {
      db.Categories.findAll()
      .then(function(categories){
        return res.render('create', {categories: categories}) 
      })
      
      },  
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
        res.redirect("products")
    },
    productDetail : function(req, res, next) {
       db.Products.findByPk(req.params.id)
       .then(function(product){
        res.render('productDetail', {products : product});
       })
      },
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
    delete: (req,res) => {
      res.render ("edit")
    },    
    
}


module.exports = productsController