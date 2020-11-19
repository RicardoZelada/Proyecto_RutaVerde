
function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();
    console.log(profile);

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      //var id_token = googleUser.getAuthResponse().id_token;
      //console.log(id_token)
    
      localStorage.setItem('usuario',profile.getName());
      localStorage.setItem('imagen',profile.getImageUrl());
    
      console.log(localStorage);
        
      let user = localStorage.getItem('usuario');
      let image = localStorage.getItem('imagen');
        if(user != 'null' && image != 'undefined'){
        let navSecion = document.querySelector(".nav-Login");
        //let navSecionInicio = document.querySelector(".nav-Login");

            navSecion.classList.add("bg-light","bg-gradient","text-right","mr-5");
            navSecion.innerText = "Bienvenido : " + user;
           // navSecionInicio.classList.add("bg-light","bg-gradient","text-right","mr-5");
           // navSecionInicio.innerText = "Bienvenido : " + user
            let imagenLogin = document.createElement("img");
            imagenLogin.classList.add("imagenCss")
            imagenLogin.setAttribute('src', image);
            let linkSignOut = document.createElement("a");
            linkSignOut.classList = ("stretched-link", "pl-3")
            linkSignOut.innerHTML = "SingOut"
            linkSignOut.addEventListener('click', ()=>{
              signOut();
            })
            navSecion.appendChild(imagenLogin);
            navSecion.appendChild(linkSignOut);
            //navSecionInicio.appendChild(imagenLogin);
            //navSecionInicio.appendChild(linkSignOut);   
        }
        //window.location.href = "index.html";
        
}





function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      localStorage.clear();
      let navSignOut = document.querySelector(".nav-Login");
        navSignOut.innerHTML = "";  
        console.log('User signed out.');
    });
  }

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

      localStorage.setItem('usuario', response.name);
      localStorage.setItem('imagen', response.picture.data.url);
      console.log(localStorage);
    } 
    )
  }

  function checkLoginState(){
    FB.getLoginStatus(function(response){
      if(response.status === "connected"){
        showData();

        let user = localStorage.getItem('usuario');
        let image = localStorage.getItem('imagen');

        let navSecion = document.querySelector('.nav-Login');
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
            //window.location.href = "index.html";
      }else{
        console.log("Error");
      }
    })
  }

  
    FB.logout(function(response) {
      // Person is now logged out
      localStorage.clear();
      let navSignOut = document.querySelector(".nav-Login");
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