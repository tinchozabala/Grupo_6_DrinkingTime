var swal = require('sweetalert')
window.addEventListener("load", ()=>{
    const deleteProduct = document.querySelectorAll("#deleteProduct")
    console.log(deleteProduct);
    for (let i = 0; i<deleteProduct.length; i ++){
        deleteProduct[i].addEventListener("click", ()=>{
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                  });
                } else {
                  swal("Your imaginary file is safe!");
                }
              });

        })
    }
})