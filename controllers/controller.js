let controlador = {
    index : ( req, res) => {
        res.render('index')
    },
    products : (req, res) => {
        res.render('productCatalog')
    }
}

module.exports = controlador