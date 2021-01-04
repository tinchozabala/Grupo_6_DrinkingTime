const productsController ={
    catalog : function(req, res, next) {
      res.render('catalog')
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