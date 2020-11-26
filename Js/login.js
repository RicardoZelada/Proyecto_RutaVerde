
function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();
    console.log(profile);

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      //var id_token = googleUser.getAuthResponse().id_token;
      //console.log(id_token)
    
    let nameGoogle = profile.getName();
    let imageGoogle = profile.getImageUrl();

    localStorage.setItem('usuario', JSON.stringify(nameGoogle));
    localStorage.setItem('imagen', JSON.stringify(imageGoogle));
    
    datosGoogle();
    window.location.href = "index.html";
      console.log(localStorage);      
    }

    if(localStorage.length >= 1){
      document.querySelector(".oculto").classList.remove("d-none");
    }else{
      console.log("no funciona")
    }

function datosGoogle(){
  let navSecion = document.querySelector(".navUsuario");
  navSecion.classList.add("text-right","mr-4");
      navSecion.innerText = JSON.parse(window.localStorage.getItem('usuario'));
      let imagenLogin = document.createElement("img");
      imagenLogin.classList.add("imagenCss")
      imagenLogin.src = JSON.parse(window.localStorage.getItem("imagen"));
      let linkSignOut = document.createElement("a");
      linkSignOut.classList = ("stretched-link", "pl-2")
      linkSignOut.innerText = "SingOut"
      linkSignOut.href = "#";
      linkSignOut.addEventListener('click', ()=>{
        signOut();
      })
      navSecion.appendChild(imagenLogin);
      navSecion.appendChild(linkSignOut);
  
      console.log("probando")
  }

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      localStorage.clear();
      let navSecion = document.querySelector(".navUsuario");
        navSecion.innerHTML = "";  
        console.log('User signed out.');
    });
  }

  window.addEventListener('DOMContentLoaded',datosGoogle());  

  window.fbAsyncInit = function(){   //sincronizo con la app de facebook
    FB.init({
      appId:  3835715263105233,
      status: true,
      cookie: true,
      xfbml:  true,
      version:'v8.0'
    });
  }

  function showData(){
    FB.api('/me', "GET", {fields: "first_name, last_name, name, picture.width(35).height(35)"}, function(response){
      console.log(response.name);
      console.log(response.picture.data.url);

      localStorage.setItem('usuario', JSON.stringify(response.name));
      localStorage.setItem('imagen', JSON.stringify(response.picture.data.url));
      console.log(localStorage);
    } 
    )
  }
 
  function checkLoginState(){
    FB.getLoginStatus(function(response){
      if(response.status === "connected"){
        showData();

        let user =  JSON.parse(localStorage.getItem('usuario'));
        let image = JSON.parse(localStorage.getItem('imagen'));
        
        let navSecion = document.querySelector('.navUsuario');
            let parrafo =document.createElement("p");
            parrafo.innerText = "Recargue la pagina para ver los datos"
            navSecion.classList.add("bg-light","bg-gradient","text-right","mr-5");
            navSecion.innerText = "Bienvenido : " + user;
            let imagenLogin = document.createElement("img");
            imagenLogin.classList.add("imagenCss")
            imagenLogin.setAttribute('src', image);
            let linkSignOut = document.createElement("a");
            linkSignOut.classList = ("stretched-link", "pl-3")
            linkSignOut.innerHTML = "SingOut"
            linkSignOut.addEventListener('click', ()=>{
              //llamar la funcion cerrar
              FB.logout();
            })
            navSecion.appendChild(imagenLogin);
            navSecion.appendChild(linkSignOut);
            navSecion.appendChild(parrafo);
            //window.location.href = "index.html"; 
            
      }else{
        console.log("Error");  
      }
    })
  }

    FB.logout(function(response) {
      // Person is now logged out
      localStorage.clear();
      let navSignOut = document.querySelector(".navUsuario");
          navSignOut.innerHTML = "";  
          console.log('User signed out.');
 });
  
  (function(d, s, id){                           // inicializa el sdk
    let js, fjs = d.getElementsByTagName(s)[0];
    if(d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script','facebook-jssdk'))