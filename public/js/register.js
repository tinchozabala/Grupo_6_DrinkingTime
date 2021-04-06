window.addEventListener("load", function(){

    let formulario = document.querySelector ("form.formulario-login")
    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        let errores = [];

    let email = document.querySelector("#email");
        if (email.value == ""){
            errores.push ("Debe indicar su correo electronico")
        }

    let contraseña = document.querySelector("#contraseña");
        if (contraseña.value == ""){
            errores.push ("Debe indicar una contraseña")
        }

    let confirmPass= document.querySelector("#confirmPass");
        if (confirmPass.value == ""){
            errores.push ("Debe reingresar la contraseña")
        }

        let name= document.querySelector("#name");
        if (name.value == ""){
            errores.push ("Debe indicar su nombre completo")
        }

    let image = document.querySelector("#image");
        if (image.value == ""){
            errores.push ("Debe seleccionar una imagen de perfil")
        }

        let nacimiento= document.querySelector("#nacimiento");
        if (nacimiento.value == ""){
            errores.push ("Debe indicar su fecha de nacimiento")
        }

        if(errores.length > 0 ){
            event.preventDefault();

        let ulErrores = document.querySelector("div.errores ul");
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>" 
        }
    } else {
        formulario.submit()
    }
})
})