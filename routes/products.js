var express = require('express');
var router = express.Router();

// primero detalle de producto
// listado de productos - catalogo
// formulario de alta de productos
// formulario editar productos
// eliminar producto - no necesita vista pero si un method

router.get('/', function(req, res, next) {
    res.render('productCart')
  });

// Render hay que mandar una vista
router.get('/:id', function (req, res){
    res.render('')
})

