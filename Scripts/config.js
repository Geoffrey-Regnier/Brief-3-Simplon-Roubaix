let main = document.getElementById("root");
let etiquettesHTML = "";
let styleEtiquette = document.querySelectorAll("main div")

function recupererEtiquette () {

    fetch('https://reqres.in/api/users?page=1', { method: 'get' })
  .then(response => {
    return response.json();
  })
  .then(data => {
    let user = data.data;

    for (let i = 0; i < user.length; i++) {
      etiquettesHTML += creerEtiquette(user[i]);
    }

    fetch('https://reqres.in/api/users?page=2', { method: 'get' })
      .then(response => {
        return response.json();
      })
      .then(data => {
        let user = data.data;

        for (let i = 0; i < user.length; i++) {
          etiquettesHTML += creerEtiquette(user[i]);
        }

        main.innerHTML = etiquettesHTML;
      });
  });

    function creerEtiquette(user) {
    let userFirstName = user.first_name;
    let userLastName = user.last_name;
    let userAvatar = user.avatar;

    let etiquette = `
        <div>
        <div><img src="${userAvatar}" alt="Photo de l'utilisateur"></div>
        <p>${userFirstName}</p>
        <p>${userLastName}</p>
        </div>
    `;

    return etiquette;
    }
}