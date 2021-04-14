module.exports = (req, res, next) => {
    res.locals.usuario = false;

    if(req.session.usuario){
        res.locals.usuario = req.session.usuario
    }else if (req.cookies.usuario){
        req.session.usuario = req.cookies.usuario;
        req.locals.usuario = req.cookies.usuario;
    }
    next();

}