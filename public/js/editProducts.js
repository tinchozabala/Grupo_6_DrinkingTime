window.addEventListener("load", function(){

    let formulario = document.querySelector ("form.editProduct")
    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        let errores = [];

    let name = document.querySelector("#name");
    
        if (name.value == ""){
            errores.push ("Debe indicar el nombre del producto")
        }

    let price = document.querySelector("#price");
        if (price.value == ""){
            errores.push ("Debe indicar el costo del producto")
        }

    let image = document.querySelector("#image");
        if (image.value == ""){
            errores.push ("Debe seleccionar una imagen")
        }

    let product_detail = document.querySelector("#product_detail");
        if (product_detail.value == ""){
            errores.push ("Debe indicar la descripcion del producto")
        }

    let category_id = document.querySelector("#category_id");
        if(category_id.value == ""){
            errores.push ("Debe seleccionar una categoria")
        }

    let brand_id = document.querySelector("#brand_id");
        if(brand_id.value == ""){
            errores.push ("Debe seleccionar una marca")
        }

        console.log(errores)
        if(errores.length > 0 ){
            event.preventDefault();

        let ulErrores = document.querySelector("div.errores ul");
        console.log(ulErrores);
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>" 
        }
    } else {
        formulario.submit()
    }
})
})