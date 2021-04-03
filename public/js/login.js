window.addEventListener("load", function(){
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

    

})