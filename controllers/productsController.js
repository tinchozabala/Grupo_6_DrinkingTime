const fs = require ('fs')
const path = require ('path')

let products = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), {encoding : 'utf-8'})
products = JSON.parse(products)



const productsController ={
    catalog : function(req, res, next) {
      return res.render('catalog', {products})
      },
    create : (req, res, next) => {
      res.render('create')
      },  
    productDetail : function(req, res, next) {
        let detalle = req.params.id;

        res.render('productDetail', {products : products[detalle]})
      },
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
    productCreate: (req, res, next) => { 
      let productos = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.files[0].filename,
        categoria: req.body.categoria,
        marca: req.body.marca,
        precio: req.body.precio
      }
      products.push(productos);
      let productosJson = JSON.stringify(products);
      fs.writeFileSync ("../data/products.json", productosJson);
      res.redirect ("products");
      }
}


module.exports = productsController