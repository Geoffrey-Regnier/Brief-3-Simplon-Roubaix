fetch ('https://reqres.in/api/users?page=2',{method:'get'})
.then( response => {
    return response.json();
})
.then (data => {
    let i = 0
    let user = data.data
    let main = document.getElementById("main")

    for (i ; i < user.length ; i++) {

        creerEtiquette()
        function creerEtiquette() {
            userID = user[i].id 
            userEmail = user[i].email 
            userFirstName = user[i].first_name 
            userLastName = user[i].last_name
            userAvatar = user[i].avatar
        
            etiquette = `
            <div>
                <div><img src="${userAvatar}" alt=""></div>
                <p>${userID}</p>
                <p>${userFirstName}</p>
                <p>${userLastName}</p>
                <p>${userEmail}</p>
            </div>
             `;
        
            main.innerHTML = etiquette
        }
    }

   
})



