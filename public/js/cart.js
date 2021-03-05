const db = require("../../src/database/models")

window.addEventListener("load", function() {
    db.Products.findOne({
        where : {
            id = req.params.id
        }
    })
    .then((producto)=>{
        const button = document.querySelector('#agregarBoton')
    console.log(button);
    button.addEventListener('click', function(){
        console.log(producto);
    })
    })

} )