let mail = document.getElementById("mail");
let mot_de_passe = document.getElementById("motDePass");
let loginBtn = document.getElementById("loginBtn");
let alertTitle = document.getElementById("title");
let alertContent = document.getElementById("alertContent");
let alerte_notif = document.querySelector("#notif");
let alerte_connected = document.querySelector("#connected");
let second = 0;

// create user
const user1 = {
  pwd: "sab123",
  username: "sofi",
};
let user2 = {
  pwd: "fadi123",
  username: "fadi",
};

let waitTime = 60;
let int = null;
let tryNumber = 5;


// fonction pour demarrer le conteur et afficher l'alerte
const StartTimer = ()=>{
  waitTime--;
  Alert('Compte bloqué', `Attendez ${waitTime} seconde`);

}
// fonction pour le message d'alerte personnalisé
const Alert = (titre, message)=>{
 alertTitle.textContent= titre;
 alertContent.textContent= message;
}
// fonction pour gerer les tentatives incorrectes
const IncorrectLoginController = ()=>{
  tryNumber--
  alerte_notif.style.display = 'block'
  if (tryNumber >0) {
    Alert('Attention', `Il vous reste ${tryNumber} tentative`)
  setTimeout(()=>{
    alerte_notif.style.display = 'none'
  },2000)

  }
}
// fonction pour afficher the count
const DisplayCounter= ()=>{
  if (tryNumber === 0) {
    alerte_notif.style.display = 'block';
    setInterval(StartTimer, 1000)
   setTimeout(()=>{
    alerte_notif.style.display = 'none';
    clearInterval(int)
   }, 60000)
  }
}

// on l'appel à l'extérieur pour faire persister la fonction
DisplayCounter()

//fonction pour controller les requetes de connexionns
const LoginController = ()=>{
  const userInLocalStorage = localStorage.getItem('loggedInUser')
  if(userInLocalStorage) {
    user2 = JSON.parse(userInLocalStorage)
  }
  if (mail.value === user2.username && (mot_de_passe.value === user2.pwd )) {
    // localStorage.setItem("loggedInUser", JSON.stringify({ mail, mot_de_passe }));
    location.href = '../dachboard.html'
  }else{
    IncorrectLoginController()
 
  }
}



// evenement sur le bouton de connexion
loginBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  LoginController()
  DisplayCounter()
})







/* function afficherModal() {
  alerte_notif.style.display = "block";
}
function fermerModal() {
  alerte_notif.style.display = "none";
}

function afficherAlerteAvecDuree() {
  afficherModal();

  // Fermer la modale automatiquement après 3 secondes
  setTimeout(function () {
    fermerModal();
  }, 3000);
}
function login() {
  if (mail.value === user1.username || mot_de_passe.value === user1.pwd) {
    afficherConnecteAvecDuree();
    location.href = "dachboard.html";
  }
  if (mail.value === user2.username || mot_de_passe.value === user2.pwd) {
    afficherConnecteAvecDuree();
    location.href = "dachboard.html";
  }
  afficherAlerteAvecDuree();
}

buttonConnexion.addEventListener("click", (event) => {
  login();
  afficherAlerte();
  event.preventDefault();
  afficherAlerteAvecDuree();
  login();
  afficherConnecteAvecDuree();
});
function afficherConnecteAvecDuree() {
  afficherconnecter();

  // Fermer la modale automatiquement après 3 secondes
  setTimeout(function () {
    fermerconnecter();
  }, 3000);
} */
/* 
function afficherconnecter() {
  alerte_connected.style.display = "block";
}
function fermerconnecter() {
  alerte_connected.style.display = "none";
}





let tentatives = 0;
let maxTentatives = 3;
let minuteur;
let secondesRestantes =  60;

function afficherAlerte() {
  if (tentatives < maxTentatives) {
    afficherModal();
    tentatives++;
    document.getElementById("messageAlerte").innerText =
      "Alerte : Ceci est un message d'alerte !";
    document.getElementById("tentativesRestantes").innerText =
      "Tentatives restantes : " + (maxTentatives - tentatives);

    // Fermer la modale automatiquement après 3 secondes
    setTimeout(function () {
      fermerModal();
    }, 2000);
  } else {
   
   

  setTimeout(function () {
    afficherModal();
    document.getElementById("messageAlerte").innerText =
    "Trop de tentatives. Attendez 1 minute.";
  document.getElementById("tentativesRestantes").innerText = minuteur;
      minuteur = setInterval(function () {
         secondesRestantes--  /* Math.floor(
          (60000 - (Date.now() - debutMinuteur)) / 1000
        ); 
  
        if (secondesRestantes <= 0) {
          clearInterval(minuteur);
          fermerModal();
        } else {
          document.getElementById("messageAlerte").innerText =
            "Trop de tentatives. Attendez " + minuteur + " secondes.";
  
          loginBtn.disabled = true;
        }
      
      }, 60000);
      

    }, 10000);
    // Afficher le minuteur d'1 minute
    
  }
  // Débloquer l'input après la fermeture de la modale
  loginBtn.disabled = false;
    
}
// Fonction pour afficher la modale */
