let mail = document.getElementById("mail");
let mot_de_passe = document.getElementById("motDePass");
let buttonConnexion = document.querySelector(".button");                                

function login() {
  if (mail.value == "mot" && mot_de_passe.value == "123") {
    location.href = 'dachboard.html'
  }
}
login()
buttonConnexion.addEventListener('click', (event) =>{
  event.preventDefault()
  login()
})