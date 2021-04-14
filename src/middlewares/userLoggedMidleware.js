module.exports = (req, res, next) =>{
    if (req.session.usuario == null ) {
        res.redirect("/");
    }else{
        res.locals.usuario =req.session.usuario
        if (req.session.usuario.id != req.params.id){ 
            return res.redirect("/profile/" + req.session.usuario.id)
        }   
            next();
        }    
}