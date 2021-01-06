const fs = require ('fs')
const path = require ('path')

let products = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), {encoding : 'utf8'})
products = JSON.parse(products)




const productsController ={
    catalog : function(req, res, next) {
      return res.render('catalog', {products})
      },
    create : (req, res, next) => {
      res.render('create')
      },  
    productDetail : function(req, res, next) {
        res.render('productDetail')
      },
    edit :  (req, res, next) => {
      res.render('edit')
      }, 
    cart :  (req, res, next) => {
      res.render('productCart')
      },   
}



module.exports = productsController