const FILE_INPUT = document.querySelector("input[type=file]");
const AVATAR = document.getElementById("avatar");
const imgAvatar = document.getElementById("imgAvatar");
const avatarNav = document.getElementById("avatarNav");
const Identifiant = document.getElementById("Identifiant");
const Email = document.getElementById("Email");
const connexion = document.getElementById("connexion");
const biographie = document.getElementById("biographie");

const nouveauPass = document.getElementById("NouveauPass");
const ancienPass = document.getElementById("AncienPass");
const confirmer = document.getElementById("ConfirmPass");
const envoyerModif = document.getElementById("envoyerModif");

const modifPass = document.getElementById('modifPass');
const btnSupprimerCompte = document.getElementById('supprimerCompte');


const Modifier_Mot_Pass = document.querySelector('.Modifier_Mot_Pass');

FILE_INPUT.addEventListener("change", () => {
  const file = FILE_INPUT.files[0];
  //TODO: convert image to base64 before save it in localstorag

  const reader = new FileReader();

  // Définissez une fonction de rappel pour l'événement onload (lorsque la lecture est terminée)
  reader.onload = function (event) {
    const base64String = event.target.result; // Récupérez la représentation Base64 de l'image

    console.log(base64String); // Affichez la représentation Base64 dans la console
    localStorage.setItem("source", JSON.stringify(base64String));
    imgAvatar.src = JSON.parse(localStorage.getItem("source"));
    avatarNav.src = JSON.parse(localStorage.getItem("source"));
    // Utilisez la représentation Base64 de l'image comme vous le souhaitez (par exemple, l'afficher dans une balise img)
    // document.querySelector('img').src = base64String;
  };

  reader.readAsDataURL(file);
});
function modifierPhoto() {
  FILE_INPUT.click();
}
// sauvegarde
imgAvatar.src = JSON.parse(localStorage.getItem("source"));

function supprimPhoto() {
  imgAvatar.src = "";
  localStorage.setItem("source", "");
  avatarNav.src = "";
}
// navbar profile
avatarNav.src = JSON.parse(localStorage.getItem("source"));

// ==============================================================

connexion.addEventListener("click", () => {

  localStorage.setItem('Identifiant', Identifiant.value);
  localStorage.setItem('Email', Email.value);
  localStorage.setItem('biographie', biographie.children[0].children[0].textContent);

});

// ==================================================================ModifierMotPass
const user1 = {
  pwd: "sab123",
  username: "sofi",
};
const user2 = {
  pwd: "fadi123",
  username: "fadi",
};
modifPass.addEventListener('click', () =>{
  Modifier_Mot_Pass.style.display = 'block';
  
})
envoyerModif.addEventListener('click', (e) => {
  e.preventDefault();

  let nouveauValeur = nouveauPass.value;
  let ancienValeur = ancienPass.value;
  let confirmerValeur = confirmer.value;

  // Vérification des informations de connexion
  if (ancienValeur === user2.pwd && nouveauValeur === confirmerValeur) {
    user2.pwd = nouveauValeur;
    localStorage.setItem("loggedInUser", JSON.stringify(user2));
    location.href = '../dachboard.html';
  }else {
    IncorrectLoginController();
  }
});

// ========================================================Suppression du compte utilisateur
const supprimerCompte = () => {
  // Supprimer l'utilisateur du localStorage
  localStorage.removeItem("loggedInUser");
  // Rediriger vers une page de confirmation ou une autre page appropriée
 
};

// Ajouter un gestionnaire d'événements au bouton de suppression
btnSupprimerCompte.addEventListener('click', (e) => {
  e.preventDefault()
  // Demander confirmation avant de supprimer le compte
  if (confirm("Êtes-vous sûr de vouloir supprimer votre compte ?")) {
    // Si l'utilisateur confirme, supprimer le compte
    supprimerCompte();
  }
});

