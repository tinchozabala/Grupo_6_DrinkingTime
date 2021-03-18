module.exports = (req, res, next) =>{
    if (req.session.usuario == null ) {
        next()
    }else{
        if (req.session.usuario){
            res.locals.usuario =req.session.usuario
            next()
        } 
     }
        
}