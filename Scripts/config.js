
/** Initialisations */
let url = "https://reqres.in/api/users?per_page=12"
let root = document.getElementById("root");

 /** Liste des fonctions  */

 function recupererData() {
  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let users = data.data;
    let etiquette = ""


    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      let userAvatar = user.avatar;
      let userId = user.id;
      let userEmail = user.email;
      let userFirstName = user.first_name;
      let userLastName = user.last_name;

      etiquette += `
      <div class= "conteneur">
        <div class="etiquette">
          <img src="${userAvatar}" alt="Photo de l'utilisateur">
        </div>
        <div class=popup>
          <p>ID : ${userId}</p>
          <p>Prénom : ${userFirstName}</p>
          <p>Nom : ${userLastName}</p>
          <a href="mailto:${userEmail}">${userEmail}</a>
          <p>Description : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat assumenda rem dolor inventore, quam rerum suscipit culpa, consequuntur, eaque nostrum recusandae minus velit distinctio ad maiores error dolorum porro reiciendis.</p>
          <span class="boutonFermer">Fermer</span>
        </div>
      </div>
      `
      root.innerHTML = etiquette
    }

    


    let conteneur = document.querySelectorAll(".conteneur");

    conteneur.forEach(function(conteneur) {
      let etiquette = conteneur.querySelector(".etiquette");
      let popup = conteneur.querySelector(".popup");
      let boutonFermer = popup.querySelector(".boutonFermer")
  
      etiquette.addEventListener("click", function() {
        popup.style.display = "flex"
        popup.style.flexDirection = "column"
        popup.style.backgroundColor = "white"
        popup.style.fontSize = "2vh"
        popup.style.textAlign = "center"
        popup.style.paddingLeft = "50vh"
        popup.style.paddingRight = "50vh"
      });

      boutonFermer.addEventListener("click", function() {
        popup.style.display = "none";
      })

      

    })
  })
}
