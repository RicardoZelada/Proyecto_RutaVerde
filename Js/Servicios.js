tinymce.init({
    selector: '#txt-areaServicio',
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


window.mostrarErrores = (erroresLista)=>{//metodo para motrar los errores desde la lista de errores
    let errores = document.querySelector("#divErrores");
    let ol = document.createElement('ol');
    ol.classList.add("alert","alert-danger");
    erroresLista.forEach((items)=>{
    let li =document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = items;
    ol.appendChild(li);
    });
    errores.appendChild(ol);
};

window.cargarIngreso = ()=>{
    let listaServicios = document.querySelector("#divActividades");
    listaServicios.innerHTML = "";
    let imagen = "";

    window.ingreso.forEach((elementos)=>{
        if(elementos.opcion === "1"){
            let uLista = document.createElement('ul');
            uLista.classList.add("list-group", "list-group-flush")
            uLista.innerHTML = "";
            //creacion del Li para el nombre
            let liNombre = document.createElement("li");
            liNombre.classList.add("list-group-item");
            liNombre.innerText = elementos.nombre + " usted escogio la actividad Trekking al Parque Nacional la Campana";
            //creacion del Li para el telefono
            let liFono = document.createElement("li");
            liFono.classList.add("list-group-item");
            liFono.innerText = "Su telefono es : " + elementos.telefono
            //creacion del Li para el correo
            let liMail = document.createElement("li");
            liMail.classList.add("list-group-item");
            liMail.innerText = "Corre electonico : " + elementos.email + ", enviaremos mas informacion sobre la actividad.";
            //creacion del Li para el mensaje
            let liMensaje = document.createElement("li");
            liMensaje.classList.add("list-group-item");
            liMensaje.innerText = elementos.mensaje;
            //creacion del Li para la foto
            liImagen = document.createElement("li");
            liImagen.classList.add("list-group-item","p-5");
            imagen = 'Lacampana.jpg';

                uLista.appendChild(liNombre);
                uLista.appendChild(liFono);
                uLista.appendChild(liMail);
                uLista.appendChild(liMensaje);
                uLista.appendChild(liImagen);
                listaServicios.appendChild(uLista);

        }if(elementos.opcion === "2"){
            let uLista = document.createElement('ul');
            uLista.classList.add("list-group", "list-group-flush")
            uLista.innerHTML = "";
             //creacion del Li para el nombre
            let liNombre = document.createElement("li");
            liNombre.classList.add("list-group-item");
            liNombre.innerText = elementos.nombre + " usted escogio la actividad Caminatas Familiares";
            //creacion del Li para el telefono
            let liFono = document.createElement("li");
            liFono.classList.add("list-group-item");
            liFono.innerText = "Su telefono es : " + elementos.telefono
            //creacion del Li para el correo
            let liMail = document.createElement("li");
            liMail.classList.add("list-group-item");
            liMail.innerText = "Corre electonico : " + elementos.email + ", enviaremos mas informacion sobre la actividad.";
            //creacion del Li para el mensaje
            let liMensaje = document.createElement("li");
            liMensaje.classList.add("list-group-item");
            liMensaje.innerText = "Mensaje :" + elementos.mensaje;
            //creacion del Li para la foto
            liImagen = document.createElement("li");
            liImagen.classList.add("list-group-item","p-5");
            imagen = 'Imagen4.png';

                uLista.appendChild(liNombre);
                uLista.appendChild(liFono);
                uLista.appendChild(liMail);
                uLista.appendChild(liMensaje);
                uLista.appendChild(liImagen);
                listaServicios.appendChild(uLista);

        }  if(elementos.opcion === "3"){
            let uLista = document.createElement('ul');
            uLista.classList.add("list-group", "list-group-flush")
            uLista.innerHTML = "";
             //creacion del Li para el nombre
            let liNombre = document.createElement("li");
            liNombre.classList.add("list-group-item");
            liNombre.innerText = elementos.nombre + " usted escogio la actividad Team Building";
            //creacion del Li para el telefono
            let liFono = document.createElement("li");
            liFono.classList.add("list-group-item");
            liFono.innerText = "Su telefono es : " + elementos.telefono
            //creacion del Li para el correo
            let liMail = document.createElement("li");
            liMail.classList.add("list-group-item");
            liMail.innerText = "Corre electonico : " + elementos.email + ", enviaremos mas informacion sobre la actividad.";
            //creacion del Li para el mensaje
            let liMensaje = document.createElement("li");
            liMensaje.classList.add("list-group-item");
            liMensaje.innerText = "Mensaje :" + elementos.mensaje;
            //creacion del Li para la foto
            liImagen = document.createElement("li");
            liImagen.classList.add("list-group-item","p-5");
            imagen = 'TeamBuilding.png';

                uLista.appendChild(liNombre);
                uLista.appendChild(liFono);
                uLista.appendChild(liMail);
                uLista.appendChild(liMensaje);
                uLista.appendChild(liImagen);
                listaServicios.appendChild(uLista);

        }if(elementos.opcion === "4"){
            let uLista = document.createElement('ul');
            uLista.classList.add("list-group", "list-group-flush")
            uLista.innerHTML = "";
             //creacion del Li para el nombre
            let liNombre = document.createElement("li");
            liNombre.classList.add("list-group-item");
            liNombre.innerText = elementos.nombre + " usted escogio la actividad Karaoke y Fogata";
            //creacion del Li para el telefono
            let liFono = document.createElement("li");
            liFono.classList.add("list-group-item");
            liFono.innerText = "Su telefono es : " + elementos.telefono
            //creacion del Li para el correo
            let liMail = document.createElement("li");
            liMail.classList.add("list-group-item");
            liMail.innerText = "Corre electonico : " + elementos.email + ", enviaremos mas informacion sobre la actividad.";
            //creacion del Li para el mensaje
            let liMensaje = document.createElement("li");
            liMensaje.classList.add("list-group-item");
            liMensaje.innerText = "Mensaje :" + elementos.mensaje;
            //creacion del Li para la foto
            liImagen = document.createElement("li");
            liImagen.classList.add("list-group-item","p-5");
            imagen = 'imagen1.png';

                uLista.appendChild(liNombre);
                uLista.appendChild(liFono);
                uLista.appendChild(liMail);
                uLista.appendChild(liMensaje);
                uLista.appendChild(liImagen);
                listaServicios.appendChild(uLista);
        }

        let img = document.createElement("img");
        img.src = "Img/"+imagen;
        img.classList.add("img-fluid");
        liImagen.appendChild(img);

    });
}

window.guardarIngreso = (ingreso)=>{
    window.ingreso.push(ingreso);
    window.cargarIngreso();
}



window.ingreso = [];//creo lista para guardar los ingresos

const btnServicios = document.querySelector("#btnEnviar");

btnServicios.addEventListener('click', ()=>{
    let divError = document.querySelector("#divErrores");
    divError.innerHTML = "";

    let name = document.querySelector("#inputNombre").value.trim();
    let movile = document.querySelector("#inputTelefono").value.trim();
    let correo = document.querySelector("#inputEmail").value.trim();
    let message = tinymce.get('txt-areaServicio').getContent();
    let selection = document.querySelector("#selectServicio").value;

    erroresLista = [];//creo lista para guardar los errores

    if(name === ""){
        erroresLista.push("Ingrese Nombre");
    }if(movile === ""){
        erroresLista.push("Ingrese Numero Telefonico");
    }if(correo === ""){
        erroresLista.push("Ingrese Email");
    }if(message === ""){
        erroresLista.push("Ingrese un Mensaje");
    }if(selection === "#"){
        erroresLista.push("Escoja una Actividad")
    }if(erroresLista.length === 0){
        let ingreso ={}
        ingreso.nombre = name;
        ingreso.telefono = movile;
        ingreso.email = correo;
        ingreso.mensaje = message;
        ingreso.opcion = selection;

        window.guardarIngreso(ingreso);
    }else{
        window.mostrarErrores(erroresLista);
    }

});