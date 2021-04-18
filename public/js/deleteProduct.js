window.addEventListener("load", ()=>{

    let deleteProduct = document.querySelectorAll("#deleteProduct");
    console.log(deleteProduct);

    for (let i = 0; i<deleteProduct.length; i++){

      deleteProduct[i].addEventListener('click', function(event){

        let confirmacion = confirm("¿Desea eliminar el producto?")
        if (confirmacion === false){
          event.preventDefault()
        }else{
          deleteProduct.submit()
        }
      })
    }
    

})