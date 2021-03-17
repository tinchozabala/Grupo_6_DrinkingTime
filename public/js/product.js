window.addEventListener("load", function(){
    const errorsfrontName = document.querySelector(".errorsfront")
    
    let name = document.querySelector("name");
    name.addEventListener("blur", ()=>{
        if (name.value == ""){
            errorsfront.innerHTML = "Este campo es obligatorio"
        }else{
            errorsfront.innerHTML = ""
        }
        
    })

    const errorsfrontDescription = document.querySelector(".errorsfrontpass")
    let contraseña = document.querySelector("#password")
    contraseña.addEventListener("blur", ()=>{
        if (contraseña.value == ""){
            errorsfrontpass.innerHTML = "Este campo es obligatorio"
        }else{
            errorsfrontpass.innerHTML = ""
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