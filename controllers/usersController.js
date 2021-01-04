const usersController = {
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