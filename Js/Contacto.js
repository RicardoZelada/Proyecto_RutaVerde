function setData(){
    const btnGuardar = document.querySelector("#btnEnviar");
    btnGuardar.addEventListener('click',()=>{


        console.log('click');
        
    let nombreUsuario = document.querySelector("#inputNombre").value.trim();
    let apellidoUsuario = document.querySelector("#inputApellido").value.trim();
    let telefonoUsuario = document.querySelector("#inputTelefono").value.trim();
    let nacionalUsuario = document.querySelector("#inputNacionalidad").value.trim();
    let emailUsuario = document.querySelector("#inputEmail").value.trim();


    localStorage.setItem('nombre', nombreUsuario );
    localStorage.setItem('apellido', apellidoUsuario);
    localStorage.setItem('telefono', telefonoUsuario);
    localStorage.setItem('email', nacionalUsuario);
    localStorage.setItem('nacionalidad', emailUsuario);

    console.log(localStorage);
    })
}