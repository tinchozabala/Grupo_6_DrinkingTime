var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
//const { route } = require('./index.js');

/* GET users listing. */
// HOME INDEX
router.get('/', usersController.index ) ;
// LOGIN 
router.get('/login', usersController.login ) ;
// REGISTER
router.get('/register', usersController.register) ;
//BUSQUEDA
router.get('/search', usersController.search);
 
module.exports = router;
