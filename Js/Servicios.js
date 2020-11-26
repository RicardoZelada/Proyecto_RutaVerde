
window.addEventListener('DOMContentLoaded', Event =>{
console.log("cargado el DOM");

let servicioDiv = document.querySelector(".cardDiv_1");
servicioDiv.classList.add("justify-content-center");
let imagen = ""    

        //creo el card
        let card = document.createElement("div");
        //card.innerHTML = "";
        card.classList.add("card","mt-5");
        //creo el card header 
        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header","bg-success","text-white","text-center");
        cardHeader.innerText = "Promocion de Ruta Verde, Vamos a La Campana  "
        //creo el card body
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        let uLista = document.createElement('ul');
        uLista.classList.add("list-group", "list-group-flush")
        //uLista.innerHTML = "";
        let liNombre = document.createElement("li");
        liNombre.classList.add("list-group-item");
        liNombre.innerText = "Servicio Trekking al Parque la Campana";
        //creacion del Li para el telefono
        let liFono = document.createElement("li");
        liFono.classList.add("list-group-item");
        liFono.innerText = "Su telefono es : +56 9 91686165, +56 9 96631042"
        //creacion del Li para el correo
        let liMail = document.createElement("li");
        liMail.classList.add("list-group-item");
        liMail.innerText = "Corre electonico : carlamella@rutaverde.cl, naturaleza@rutaverde.cl";
        //creacion del Li para el mensaje
        let liMensaje = document.createElement("li");
        liMensaje.classList.add("list-group-item");
        liMensaje.innerText = "Descripcion : Trekking al Cerro La Campana, camino por senderos y paisajes naturales. ";
        //creacion del Li para la foto
        liImagen = document.createElement("li");
        liImagen.classList.add("list-group-item","p-2");
        let liBtn = document.createElement("li");
        liBtn.classList.add("list-group-item");
        let btnEnvio = document.createElement("button");
        btnEnvio.classList.add("btn","btn-outline-success"); 
        btnEnvio.innerText = "Lo Quiero"; 
        
        //imagen = 'foto6.png';
            
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        cardBody.appendChild(uLista);
        servicioDiv.appendChild(card);
        uLista.appendChild(liNombre);
        uLista.appendChild(liFono);
        uLista.appendChild(liMail);
        uLista.appendChild(liMensaje);
        uLista.appendChild(liImagen);
        uLista.appendChild(liBtn);  
        liBtn.appendChild(btnEnvio);
        btnEnvio.addEventListener('click', ()=>{
            Swal.fire(
                'Gracias!',
                'Usted escogio la promocion, Vamos a la Campana, Ruta Verde se comunicara a la brevedad!',
                'success'
              )
        })
//--------------------- Termino Primer Card -----------------------

let servicioDiv_2 = document.querySelector(".cardDiv_2");
servicioDiv_2.classList.add("justify-content-center");
//let imagen = "" 

//creo el card
        let card_2 = document.createElement("div");
        //card.innerHTML = "";
        card_2.classList.add("card","mt-5");
        //creo el card header 
        let cardHeader_2 = document.createElement("div");
        cardHeader_2.classList.add("card-header","bg-success","text-white","text-center");
        cardHeader_2.innerText = "Promocion de Ruta Verde, Hagamos Caminatas"
        //creo el card body
        let cardBody_2 = document.createElement("div");
        cardBody_2.classList.add("card-body");
        let uLista_2 = document.createElement('ul');
        uLista_2.classList.add("list-group", "list-group-flush")
        //uLista.innerHTML = "";
        let liNombre_2 = document.createElement("li");
        liNombre_2.classList.add("list-group-item");
        liNombre_2.innerText = "Servicio Caminatas Familiares";
        //creacion del Li para el telefono
        let liFono_2 = document.createElement("li");
        liFono_2.classList.add("list-group-item");
        liFono_2.innerText = "Su telefono es : +56 9 91686165, +56 9 96631042"
        //creacion del Li para el correo
        let liMail_2 = document.createElement("li");
        liMail_2.classList.add("list-group-item");
        liMail_2.innerText = "Corre electonico : carlamella@rutaverde.cl, naturaleza@rutaverde.cl";
        //creacion del Li para el mensaje
        let liMensaje_2 = document.createElement("li");
        liMensaje_2.classList.add("list-group-item");
        liMensaje_2.innerText = "Descripcion : Caminatas Familiares, para disfrutar en compañia junto a tu familia, disfruta esta entretenida actividad.";
        //creacion del Li para la foto
        liImagen_2 = document.createElement("li");
        liImagen_2.classList.add("list-group-item","p-2");
        let liBtn_2 = document.createElement("li");
        liBtn_2.classList.add("list-group-item");
        let btnEnvio_2 = document.createElement("button");
        btnEnvio_2.classList.add("btn","btn-outline-success"); 
        btnEnvio_2.innerText = "Lo Quiero"; 
        
        //imagen = 'foto6.png';
            
        card_2.appendChild(cardHeader_2);
        card_2.appendChild(cardBody_2);
        cardBody_2.appendChild(uLista_2);
        servicioDiv_2.appendChild(card_2);
        uLista_2.appendChild(liNombre_2);
        uLista_2.appendChild(liFono_2);
        uLista_2.appendChild(liMail_2);
        uLista_2.appendChild(liMensaje_2);
        uLista_2.appendChild(liImagen_2);
        uLista_2.appendChild(liBtn_2);  
        liBtn_2.appendChild(btnEnvio_2);
        btnEnvio_2.addEventListener('click', ()=>{
                Swal.fire(
                    'Gracias!',
                    'Usted escogio la promocion, Hagamos Caminatas, Ruta Verde se comunicara a la brevedad!',
                    'success'
                  )
            })

//--------------------- Termino segundo Card -----------------------        
        
let servicioDiv_3 = document.querySelector(".cardDiv_3");
servicioDiv.classList.add("justify-content-center");
        //let imagen = "" 
        
        //creo el card
                let card_3 = document.createElement("div");
                //card.innerHTML = "";
                card_3.classList.add("card","mt-5");
                //creo el card header 
                let cardHeader_3 = document.createElement("div");
                cardHeader_3.classList.add("card-header","bg-success","text-white","text-center");
                cardHeader_3.innerText = "Promocion de Ruta Verde, Juntos Podemos"
                //creo el card body
                let cardBody_3 = document.createElement("div");
                cardBody_3.classList.add("card-body");
                let uLista_3 = document.createElement('ul');
                uLista_3.classList.add("list-group", "list-group-flush")
                //uLista.innerHTML = "";
                let liNombre_3 = document.createElement("li");
                liNombre_3.classList.add("list-group-item");
                liNombre_3.innerText = "Servicio Team Building";
                //creacion del Li para el telefono
                let liFono_3 = document.createElement("li");
                liFono_3.classList.add("list-group-item");
                liFono_3.innerText = "Su telefono es : +56 9 91686165, +56 9 96631042"
                //creacion del Li para el correo
                let liMail_3 = document.createElement("li");
                liMail_3.classList.add("list-group-item");
                liMail_3.innerText = "Corre electonico : carlamella@rutaverde.cl, naturaleza@rutaverde.cl";
                //creacion del Li para el mensaje
                let liMensaje_3 = document.createElement("li");
                liMensaje_3.classList.add("list-group-item");
                liMensaje_3.innerText = "Descripcion : Team building una modalidad para desarrollar nuestras habilidades de interaccion, ven y trabajemos en equipo. ";
                //creacion del Li para la foto
                liImagen_3 = document.createElement("li");
                liImagen_3.classList.add("list-group-item");
                let liBtn_3 = document.createElement("li");
                liBtn_3.classList.add("list-group-item");
                let btnEnvio_3 = document.createElement("button");
                btnEnvio_3.classList.add("btn","btn-outline-success"); 
                btnEnvio_3.innerText = "Lo Quiero";               
                //imagen = 'foto6.png';
                    
                card_3.appendChild(cardHeader_3);
                card_3.appendChild(cardBody_3);
                cardBody_3.appendChild(uLista_3);
                servicioDiv_3.appendChild(card_3);
                uLista_3.appendChild(liNombre_3);
                uLista_3.appendChild(liFono_3);
                uLista_3.appendChild(liMail_3);
                uLista_3.appendChild(liMensaje_3);
                uLista_3.appendChild(liImagen_3); 
                uLista_3.appendChild(liBtn_3);  
                liBtn_3.appendChild(btnEnvio_3);
                btnEnvio_3.addEventListener('click', ()=>{
                    Swal.fire(
                        'Gracias!',
                        'Usted escogio la promocion, Juntos Podemos, Ruta Verde se comunicara a la brevedad!',
                        'success'
                      )
                })

//------------------- Termino 3 Card -----------------------/            

let servicioDiv_4 = document.querySelector(".cardDiv_4");
servicioDiv_4.classList.add("justify-content-center");
        //let imagen = "" 
        
        //creo el card
                let card_4 = document.createElement("div");
                //card.innerHTML = "";
                card_4.classList.add("card","mt-5");
                //creo el card header 
                let cardHeader_4 = document.createElement("div");
                cardHeader_4.classList.add("card-header","bg-success","text-white","text-center");
                cardHeader_4.innerText = "Promocion de Ruta Verde, Cantando con las Estrellas"
                //creo el card body
                let cardBody_4 = document.createElement("div");
                cardBody_4.classList.add("card-body");
                let uLista_4 = document.createElement('ul');
                uLista_4.classList.add("list-group", "list-group-flush")
                //uLista.innerHTML = "";
                let liNombre_4 = document.createElement("li");
                liNombre_4.classList.add("list-group-item");
                liNombre_4.innerText = "Servicio Karaoke y Fogata";
                //creacion del Li para el telefono
                let liFono_4 = document.createElement("li");
                liFono_4.classList.add("list-group-item");
                liFono_4.innerText = "Su telefono es : +56 9 91686165, +56 9 96631042"
                //creacion del Li para el correo
                let liMail_4 = document.createElement("li");
                liMail_4.classList.add("list-group-item");
                liMail_4.innerText = "Corre electonico : carlamella@rutaverde.cl, naturaleza@rutaverde.cl";
                //creacion del Li para el mensaje
                let liMensaje_4 = document.createElement("li");
                liMensaje_4.classList.add("list-group-item");
                liMensaje_4.innerText = "Descripcion : Karaoke y Fogata, juntos cantemos bajo la vista de las estrellas, junto a la compañia de una fogata.";
                //creacion del Li para la foto
                liImagen_4 = document.createElement("li");
                liImagen_4.classList.add("list-group-item","p-2");
                let liBtn_4 = document.createElement("li");
                liBtn_4.classList.add("list-group-item");
                let btnEnvio_4 = document.createElement("button");
                btnEnvio_4.classList.add("btn","btn-outline-success"); 
                btnEnvio_4.innerText = "Lo Quiero"; 
                
                //imagen = 'foto6.png';
                    
                card_4.appendChild(cardHeader_4);
                card_4.appendChild(cardBody_4);
                cardBody_4.appendChild(uLista_4);
                servicioDiv_4.appendChild(card_4);
                uLista_4.appendChild(liNombre_4);
                uLista_4.appendChild(liFono_4);
                uLista_4.appendChild(liMail_4);
                uLista_4.appendChild(liMensaje_4);
                uLista_4.appendChild(liImagen_4);
                uLista_4.appendChild(liBtn_4);  
                liBtn_4.appendChild(btnEnvio_4);
                btnEnvio_4.addEventListener('click', ()=>{
                    Swal.fire(
                        'Gracias!',
                        'Usted escogio promocion, Cantando con las Estrellas, Ruta Verde se comunicara a la brevedad!',
                        'success'
                      )
                })
            })

      /*      
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
    //let listaServicios = document.querySelector(".card-body");
    //listaServicios.innerHTML = "";
        
    let cardCliente = document.querySelector("#cardRegistro");
    cardCliente.classList.add("row","row-cols-1","row-cols-md-2", "row-cols-lg-3");
    cardCliente.innerHTML = "";
    
    let imagen = "";

    window.ingreso.forEach((elementos)=>{
        if(elementos.opcion === "1"){
            //creo el card
            let card = document.createElement("div");
            card.innerHTML = "";
            card.classList.add("card","mt-5");
            //creo el card header 
            let cardHeader = document.createElement("div");
            cardHeader.classList.add("card-header","bg-dark","text-white","text-center");
            cardHeader.innerText = "Bienvenido a Ruta Verde " + elementos.nombre;
            //creo el card body
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            let uLista = document.createElement('ul');
            uLista.classList.add("list-group", "list-group-flush")
            uLista.innerHTML = "";
            let liNombre = document.createElement("li");
            liNombre.classList.add("list-group-item");
            liNombre.innerText = elementos.nombre + " usted escogio la actividad Trekking al Parque la Campana";
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
            liMensaje.innerText = "Mensaje : " + elementos.mensaje;
            //creacion del Li para la foto
            liImagen = document.createElement("li");
            liImagen.classList.add("list-group-item","p-2");
            imagen = 'Imagen4.png';
                
            card.appendChild(cardHeader);
            card.appendChild(cardBody);
            cardBody.appendChild(uLista);
            cardCliente.appendChild(card);
            uLista.appendChild(liNombre);
            uLista.appendChild(liFono);
            uLista.appendChild(liMail);
            uLista.appendChild(liMensaje);
            uLista.appendChild(liImagen);
            

        }if(elementos.opcion === "2"){
            //creo el card
            let card = document.createElement("div");
            card.innerHTML = "";
            card.classList.add("card","mt-5");
            //creo el card header 
            let cardHeader = document.createElement("div");
            cardHeader.classList.add("card-header","bg-dark","text-white","text-center");
            cardHeader.innerText = "Bienvenido a Ruta Verde " + elementos.nombre;
            //creo el card body
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            let uLista = document.createElement('ul');
            uLista.classList.add("list-group", "list-group-flush")
            uLista.innerHTML = "";
            let liNombre = document.createElement("li");
            liNombre.classList.add("list-group-item");
            liNombre.innerText = elementos.nombre + " usted escogio la actividad Caminitas Familiares";
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
            liMensaje.innerText = "Mensaje : " + elementos.mensaje;
            //creacion del Li para la foto
            liImagen = document.createElement("li");
            liImagen.classList.add("list-group-item","p-2");
            imagen = 'Imagen3.png';
                
            card.appendChild(cardHeader);
            card.appendChild(cardBody);
            cardBody.appendChild(uLista);
            cardCliente.appendChild(card);
            uLista.appendChild(liNombre);
            uLista.appendChild(liFono);
            uLista.appendChild(liMail);
            uLista.appendChild(liMensaje);
            uLista.appendChild(liImagen);

        }  if(elementos.opcion === "3"){
            //creo el card
            let card = document.createElement("div");
            card.innerHTML = "";
            card.classList.add("card","mt-5");
            //creo el card header 
            let cardHeader = document.createElement("div");
            cardHeader.classList.add("card-header","bg-dark","text-white","text-center");
            cardHeader.innerText = "Bienvenido a Ruta Verde " + elementos.nombre;
            //creo el card body
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            let uLista = document.createElement('ul');
            uLista.classList.add("list-group", "list-group-flush")
            uLista.innerHTML = "";
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
            liMensaje.innerText = "Mensaje : " + elementos.mensaje;
            //creacion del Li para la foto
            liImagen = document.createElement("li");
            liImagen.classList.add("list-group-item","p-2");
            imagen = 'Imagen2.png';
                
            card.appendChild(cardHeader);
            card.appendChild(cardBody);
            cardBody.appendChild(uLista);
            cardCliente.appendChild(card);
            uLista.appendChild(liNombre);
            uLista.appendChild(liFono);
            uLista.appendChild(liMail);
            uLista.appendChild(liMensaje);
            uLista.appendChild(liImagen);

        }if(elementos.opcion === "4"){
            //creo el card
            let card = document.createElement("div");
            card.innerHTML = "";
            card.classList.add("card","mt-5");
            //creo el card header 
            let cardHeader = document.createElement("div");
            cardHeader.classList.add("card-header","bg-dark","text-white","text-center");
            cardHeader.innerText = "Bienvenido a Ruta Verde " + elementos.nombre;
            //creo el card body
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            let uLista = document.createElement('ul');
            uLista.classList.add("list-group", "list-group-flush")
            uLista.innerHTML = "";
            let liNombre = document.createElement("li");
            liNombre.classList.add("list-group-item");
            liNombre.innerText = elementos.nombre + " usted escogio la actividad Fogatas y Karaoke";
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
            liMensaje.innerHTML = "Mensaje : " + elementos.mensaje;
            //creacion del Li para la foto
            liImagen = document.createElement("li");
            liImagen.classList.add("list-group-item","p-2");
            imagen = 'Imagen1.png';
                
            card.appendChild(cardHeader);
            card.appendChild(cardBody);
            cardBody.appendChild(uLista);
            cardCliente.appendChild(card);
            uLista.appendChild(liNombre);
            uLista.appendChild(liFono);
            uLista.appendChild(liMail);
            uLista.appendChild(liMensaje);
            uLista.appendChild(liImagen);
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
    let message = tinymce.get("txt-areaServicio").getContent();
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

});*/