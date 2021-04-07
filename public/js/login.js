window.addEventListener("load", function(){
    
        let formulario = document.querySelector ("form.formulario-login")
        formulario.addEventListener("submit", function(event){
            event.preventDefault();
            let errores = [];
        let email = document.querySelector("#email");
        
            if (email.value == ""){
                errores.push ("Debe indicar su correo electronico")
            }
        let password = document.querySelector("#password");
            if (password.value == ""){
                errores.push ("Debe ingresar su contraseña")
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