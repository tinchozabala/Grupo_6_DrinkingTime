module.exports = (req, res, next) => {
    res.locals.usuario = false;
    

    if(req.session.usuario){
        res.locals.usuario = req.session.usuario
    }else if (req.cookies.usuario){
        req.sesion.usuario = req.cookies.usuario;
        req.locals.ususario = req.cookies.usuario;
    }
    next();
    console.log(res.session.usuario);

}