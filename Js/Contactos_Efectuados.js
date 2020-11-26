
//ListaContacto = [];

window.addEventListener('DOMContentLoaded', Event =>{
    console.log("Esta cargado el DOM");
    

    function getLocalStorage(){
        if(localStorage.getItem("Contactos")){
            let objetoContacto = JSON.parse(localStorage.getItem("Contactos"))
            console.log(objetoContacto)
            let divContacto = document.querySelector(".divContactoReciente");
            divContacto.classList.add("card","bg-light");

            let divDatos = document.createElement("div")
            divDatos.classList.add("row","row-cols-1","row-cols-lg-2","row-cols-md-2","justify-content-center","p-2")
        
            objetoContacto.forEach((items)=>{
                let ul = document.createElement('ul');
                ul.classList.add("list-group-flush")
                
                let liNombre = document.createElement("li");
                liNombre.classList.add("list-group-item");
                liNombre.innerText = "Nombre: " + items.nombre +" "+ items.apellido;
                //let liApellido = document.createElement("li");
                //liApellido.innerText = items.apellido + " "
                let liTelefono = document.createElement("li");
                liTelefono.classList.add("list-group-item");
                liTelefono.innerText = "Telefono: " + items.telefono
                let liNacionalidad = document.createElement("li");
                liNacionalidad.classList.add("list-group-item");
                liNacionalidad.innerText = "Nacionalidad: " + items.nacionalidad 
                let liEmail = document.createElement("li");
                liEmail.classList.add("list-group-item");
                liEmail.innerText = "Correo Electronico: " + items.correo
                let liMensaje = document.createElement("li");
                liMensaje.classList.add("list-group-item");
                liMensaje.innerText = "Descripcion: " + items.mensaje

                ul.appendChild(liNombre);
                //ul.appendChild(liApellido);
                ul.appendChild(liTelefono);
                ul.appendChild(liNacionalidad);
                ul.appendChild(liEmail);
                ul.appendChild(liMensaje);
                divDatos.appendChild(ul);
                divContacto.appendChild(divDatos);
            })
                
        }else{
            console.log("LocalStorage esta vacio");
       }
    }

    getLocalStorage();
    
})


