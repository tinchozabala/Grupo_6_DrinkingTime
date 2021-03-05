window.addEventListener("load", function(){
    const errorsfront = document.querySelector(".errorsfront")
    
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
    const rgpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

    let contraseña = document.querySelector("#password")
    contraseña.addEventListener("blur", ()=>{
        if (rgpassword.test(contraseña.value) == false){
            errorsfrontpass.innerHTML = "Este campo es obligatorio"
        }else{
            errorsfrontpass.innerHTML = ""
        }
    })

})