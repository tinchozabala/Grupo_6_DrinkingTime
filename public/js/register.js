window.addEventListener("load", function(){
    const errorsfront = document.querySelector(".errorsfront")
    
    let email = document.querySelector("#email");
    email.addEventListener("blur", ()=>{
        if (email.value == ""){
            errorsfront.innerHTML = "Este campo es obligatorio"
        }else{
            errorsfront.innerHTML = ""
        }
    })

    const errorsfrontpass = document.querySelector(".errorsfrontpass")
    const rgpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

    let contraseña = document.querySelector("#contraseña")
    contraseña.addEventListener("keyup", ()=>{
        if (rgpassword.test(contraseña.value) == false){
            errorsfrontpass.innerHTML = "La contraseña debe contener 8 digitos entre: mayusculas, minusculas y numeros "
        }else{
            errorsfrontpass.innerHTML = ""
        }
    })

    const errorsfrontrepass = document.querySelector(".errorsfrontrepass")
    let confirmPass = document.querySelector("#confirmPass")
    confirmPass.addEventListener("keyup", ()=>{
        if (contraseña.value != confirmPass.value){
            errorsfrontrepass.innerHTML = "Las contraseñas no coinciden"
        } else{
            errorsfrontrepass.innerHTML = ""
        }
    })

    const errorsfrontname = document.querySelector(".errorsfrontname")
    let name = document.querySelector("#name")
    name.addEventListener("keyup", () =>{
        let namevalue = name.value
        if ( namevalue.lenght <= 2) {
            errorsfrontname.innerHTML = "Debe tener al menos 2 caracteres"
        }else{
            errorsfrontname.innerHTML = ""
        }
    })

   // const form = document.querySelector(".formulario-login")
   // form.addEventListener("sumbit", (e) =>{
   //     if(revisa.value == "Revisa tus datos"){
   //         e.preventDefault()
   //     }else{
   //
   //     }        
   // })
})