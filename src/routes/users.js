var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
const path = require ("path");
const multer = require('multer');
const userLoggedMidleware = require('../middlewares/userLoggedMidleware.js');
const registerMiddleware = require("../middlewares/registerMiddleware");
const loginValidations = require('../validations/loginValidations');
const registerValidations = require('../validations/registerValidations');




var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb (null, "./public/images/avatarUsuarios")
    },
    filename: (req, file, cb) => {
      cb (null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
  })
var upload = multer ({ storage: storage });


/* GET users listing. */
// HOME INDEX
router.get('/', usersController.index ) ;

// LOGIN 
router.get('/login', usersController.login ) ;
router.post('/login', loginValidations, usersController.processLogin)

// REGISTER
router.get('/register', usersController.register);
router.post('/register',upload.any(), registerMiddleware, registerValidations, usersController.createUser)

//BUSQUEDA
router.get('/search', usersController.search);

//LISTADO DE PRODUCTOS
router.get("/profile/productlist", usersController.productList)

//MI PERFIL
router.get('/profile/:id', usersController.profile)
router.get('/profile/edit/:id', userLoggedMidleware, usersController.profileView);
router.post('/profile/edit/:id',userLoggedMidleware,upload.any(), usersController.profileEdit)

// 7. /products/ :id (DELETE) Acción de borrado
router.delete('/profile/edit/:id', usersController.productDelete)



//SESSION
router.get("/session", function (req, res){
    if (req.session.numeroVisitas == undefined){
        req.session.numeroVisitas = 0;
    }
    req.session.numeroVisitas++;

    res.send("Session tiene el numero " + req.session.numeroVisitas)
});
router.get("/numerosession", function (req, res){
    res.send("Session tiene el numero " + req.session.numeroVisitas)
});

 
module.exports = router;
