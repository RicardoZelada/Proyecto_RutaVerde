
function onSignIn(googleUser) {
    //profile = googleUser.getBasicProfile();
    //console.log(JSON.stringify(profile));
    console.log('ID: ' + googleUser.getBasicProfile().getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + googleUser.getBasicProfile().getName());
    console.log('Image URL: ' + googleUser.getBasicProfile().getImageUrl());
    console.log('Email: ' + googleUser.getBasicProfile().getEmail()); // This is null if the 'email' scope is not present.
      var id_token = googleUser.getAuthResponse().id_token;
      console.log(id_token)
    
    localStorage.setItem('usuario',googleUser.getBasicProfile().getName());
    localStorage.setItem('imagen',googleUser.getBasicProfile().getImageUrl());
    
      console.log(localStorage);
        
      let user = localStorage.getItem('usuario');
      let image = localStorage.getItem('imagen');
        if(user != 'null' && image != 'undefined'){
        let navSecion = document.querySelector('#nav-Login');
            navSecion.classList.add("bg-light","bg-gradient","text-right","mr-5");
            //let nombreLogin = document.createElement("div");
            //nombreLogin.classList.add("bg-success");
            navSecion.innerText = "Bienvenido : " + user;
            let imagenLogin = document.createElement("img");
            imagenLogin.style.width = "35px";
            imagenLogin.style.marginLeft = "10px";
            imagenLogin.style.borderRadius = "50px";
            imagenLogin.setAttribute('src', image);
            let linkSignOut = document.createElement("a");
            linkSignOut.classList = ("stretched-link", "pl-3")
            linkSignOut.innerHTML = "SingOut"
            linkSignOut.addEventListener('click', ()=>{
              signOut();
            })
            //imagenLogin.classList.add("img-fluid");
            //imagenLogin.innerHTML = + image;
            navSecion.appendChild(imagenLogin);
            navSecion.appendChild(linkSignOut);
        }

}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      localStorage.clear();
      let navSignOut = document.querySelector("#nav-Login");
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

        let navSecion = document.querySelector('#nav-Login');
            navSecion.classList.add("bg-light","bg-gradient","text-right","mr-5");
            navSecion.innerText = "Bienvenido : " + user;
            let imagenLogin = document.createElement("img");
            imagenLogin.style.width = "35px";
            imagenLogin.style.marginLeft = "10px";
            imagenLogin.style.borderRadius = "50px";
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
      }else{
        console.log("Error");
      }
    })
  }

  FB.logout(function(response) {
    // Person is now logged out
    localStorage.clear();
    let navSignOut = document.querySelector("#nav-Login");
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