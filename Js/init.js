tinymce.init({
    selector: '#txt-textarea',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

  
document.addEventListener( 'DOMContentLoaded', function () {
        new Splide( '.splide',{
            perPage: 3,
            autoplay: "true",
            width: "100%",
            height: "20rem",
            focus: "center",
            type: "loop",
            cover: "true",
            breakpoints:{
                '640': {
                    perPage: 2,
                    gap    : '1rem',
                },
                '480': {
                    perPage: 1,
                    gap    : '1rem',
                },
            }
        } ).mount();
    } );

  
 //--------------------------------------------------------------------------------------------   
    window.mostrarErrores = (listaErrores)=>{
        let error = document.querySelector("#divErrores");
        let ol = document.createElement("ol");
        ol.classList.add("alert","alert-danger");
        listaErrores.forEach((items)=>{
            let li = document.createElement("li");
            li.classList.add("list-group-item");
            li.innerText = items;
            ol.appendChild(li);
        });
        error.appendChild(ol);
    }

    window.registroContacto = [];//Lista para guardar contactos
    
    const btnAux = document.querySelector("#btnEnviar");
    
    btnAux.addEventListener('click', ()=>{
        let erroresDiv = document.querySelector("#divErrores");
        erroresDiv.innerHTML = "";

        let name = document.querySelector("#inputNombre").value.trim();
        let lastname = document.querySelector("#inputApellido").value.trim();
        let movile = document.querySelector("#inputTelefono").value.trim();
        let nacional = document.querySelector("#inputNacionalidad").value.trim();
        let email = document.querySelector("#inputEmail").value.trim();
        let description = tinymce.get('txt-textarea').getContent();
        

        listaErrores = [];//Lista para los Errores
        if(name === ""){
            listaErrores.push("Ingrese un Nombre")
        }if(lastname === ""){
            listaErrores.push("Ingrese un Apellido")
        }if(movile === ""){
            listaErrores.push("Ingrese Numero Telefonico")
        }if(nacional === ""){
            listaErrores.push("Ingrese su Nacionalidad")
        }if(email === ""){
            listaErrores.push("Ingrese Email")
        }if(description === ""){
            listaErrores.push("Ingrese una Descripcion")
        }if(listaErrores.length === 0){
            let registroContactos = {}
                registroContactos.nombre = name;
                registroContactos.apellido = lastname;
                registroContactos.telefono = movile;
                registroContactos.nacionalidad = nacional;
                registroContactos.correo = email;
                registroContactos.mensaje = description;                

            window.registroContacto.push(registroContactos);
            localStorage.setItem('Contactos', JSON.stringify(registroContacto));
            console.log(localStorage);
            Swal.fire(
                'Gracias!',
                'Registro ingresado correctamente!',
                'success'
              )
        }else{
            window.mostrarErrores(listaErrores);   
        }
    });




