const fs = require ('fs')
const path = require ('path')
const productsController = require('./productsController')

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
    }
} 

module.exports = usersController



//let laBusqueda = req.query.search;
      //let results = [];
      //for (let i = 0; i<products.length; i++){
      //  if (products[i].name.includes(laBusqueda)){
      //    results.push(products[i]); 
      //  }