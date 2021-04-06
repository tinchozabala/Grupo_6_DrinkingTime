window.addEventListener("load", function(){
<<<<<<< HEAD

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
=======
    const errorsfront = document.querySelector(".errorsfront")
        const rgemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        let email = document.querySelector("#email");
        email.addEventListener("blur", ()=>{
            if (email.value == ""){
                errorsfront.innerHTML = "Este campo es obligatorio"
            }else{
                errorsfront.innerHTML = ""
            }
            console.log(rgemail.test(email.value))
        })
    
        const errorsfrontpass = document.querySelector(".errorsfrontpass")
        let contraseña = document.querySelector("#password")
        contraseña.addEventListener("blur", ()=>{
            if (contraseña.value == ""){
                errorsfrontpass.innerHTML = "Este campo es obligatorio"
            }else{
                errorsfrontpass.innerHTML = ""
            }
        })

    const login = document.querySelector(".formulario-login")
    login.addEventListener("submit", function(e){
    if(errorsfront && errorsfrontpass == ""){
        login.submit()        
    }

    })


    const viewpass = document.querySelector("#view-pass")
    viewpass.addEventListener("click", ()=>{
        if (contraseña.getAttribute("type") == "password"){
            contraseña.setAttribute("type", "text")
        } else{
            contraseña.setAttribute("type", "password")
        }
    })

    

>>>>>>> 169d8b151d2604481cd5ab9ad323e7637d5e5f11
})