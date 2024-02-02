const FILE_INPUT = document.querySelector("input[type=file]");
const AVATAR = document.getElementById("avatar");
const imgAvatar = document.getElementById("imgAvatar");
FILE_INPUT.addEventListener("change", () => {
  const file = FILE_INPUT.files[0];
  let source = URL.createObjectURL(file);
  localStorage.setItem('source', JSON.stringify(source))
  imgAvatar.src = JSON.parse(localStorage.getItem('source'));
});
function modifierPhoto() {
  FILE_INPUT.click();
}
// sauvegarde
imgAvatar.src = JSON.parse(localStorage.getItem('source'));