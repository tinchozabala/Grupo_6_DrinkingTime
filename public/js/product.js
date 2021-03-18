window.addEventListener("load", function(){
    const errorsfront = document.querySelector(".errorsfront")
    
    let name = document.querySelector("#name");
    name.addEventListener("blur", ()=>{
        if (name.value == ""){
            errorsfront.innerHTML = "Este campo es obligatorio"
        }else{
            errorsfront.innerHTML = ""
        }
        
    })

    const errorsfrontDetails = document.querySelector(".errorsfrontDetails")
    let details = document.querySelector("#product_detail")
    details.addEventListener("blur", ()=>{
        if (details.value == ""){
            errorsfrontDetails.innerHTML = "Este campo es obligatorio"
        }else{
            errorsfrontpass.innerHTML = ""
        }
    })
    const errorsfrontPrice = document.querySelector(".errorsfrontPrice")
    let price = document.querySelector("#price")
    price.addEventListener("blur", ()=>{
        if (price.value == ""){
            errorsfrontPrice.innerHTML = "Este campo es obligatorio"
        }else{
            errorsfrontpass.innerHTML = ""
        }
    })
    

})