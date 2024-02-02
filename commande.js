// tableau d'objet
const tBodyCommande = document.querySelector("#tBodyCommande");
const commandeData = [
  {
    commandeNum: "0003",
    laboratoireName: "Cipmen",
    analyseDate: "17/03/2023",
    satut: "En cour",
  },
  {
    commandeNum: "0005",
    laboratoireName: "ADU",
    analyseDate: "19/03/2023",
    satut: "En cour",
  },
  {
    commandeNum: "0004",
    laboratoireName: "Ansi",
    analyseDate: "14/03/2023",
    satut: "Terminer",
  },
  {
    commandeNum: "0002",
    laboratoireName: "Ansi",
    analyseDate: "10/03/2023",
    satut: "En cour",
  },
  {
    commandeNum: "0007",
    laboratoireName: "Cipmen",
    analyseDate: "21/03/2023",
    satut: "En cour",
  },
  {
    commandeNum: "0001",
    laboratoireName: "CodeLoccol",
    analyseDate: "10/03/2023",
    satut: "Terminer",
  },
  {
    commandeNum: "0008",
    laboratoireName: "Ansi",
    analyseDate: "01/03/2023",
    satut: "Terminer",
  },
  {
    commandeNum: "0006",
    laboratoireName: "CodeLoccol",
    analyseDate: "10/03/2023",
    satut: "En cour",
  },
  {
    commandeNum: "0010",
    laboratoireName: "Cipmen",
    analyseDate: "10/03/2023",
    satut: "En cour",
  },
  {
    commandeNum: "0009",
    laboratoireName: "CodeLoccol",
    analyseDate: "10/03/2023",
    satut: "Terminer",
  },
  {
    commandeNum: "0011",
    laboratoireName: "ADU",
    analyseDate: "30/03/2023",
    satut: "En cour",
  },
];
// ================================================ affichage du tableau
tBodyCommande.innerHTML = "";
commandeData.forEach((element) => {
  tBodyCommande.innerHTML += `<tr>
  <td style="font-size: 18px;width: 49rem;text-align: center;font-weight: bold;border-right: solid 1px;">
    ${element.commandeNum}</td>
  <td
    style="font-size: 18px;width: 25em;padding: 0 40px 0 0;text-align: center;font-weight: bold;border-right: solid 1px;">
    ${element.laboratoireName}</td>
  <td style="font-size: 18px;width:10em ;text-align: center;font-weight: bold;border-right: solid 1px;">
  ${element.analyseDate}</td>
  <td
    style="font-size: 18px;width:rem ;padding: 0 45px ;text-align: center;font-weight: bold;border-right: solid 1px;">
    ${element.satut}</td>
  <td style="font-size: 18px;width:30rem ;text-align: center;font-weight: bold;"> <button>Voir</button> </td>
</tr>`;
});




// ========================================================================================================
let trie = document.querySelectorAll(".trie");
let commandeNumCroissant = true;
let laboratoireNameCroissant = true;
let analyseDateCroissant = true;
let trieStatutCroissant = true;
// +=======================================>  Commande
let trieCommand = document.querySelector(".trieCommand");
trieCommand.addEventListener("click", () => {
  trieTable("commandeNum", commandeNumCroissant);
  commandeNumCroissant = !commandeNumCroissant;
});
// +=======================================> Laboratoir
let trieLaboratoire = document.querySelector(".trieLaboratoire");
trieLaboratoire.addEventListener("click", () => {
  trieTable("laboratoireName", laboratoireNameCroissant);
  laboratoireNameCroissant = !laboratoireNameCroissant;
});
// +========================================> Date
let trieDate = document.querySelector(".trieDate");
trieDate.addEventListener("click", () => {
  trieTable("analyseDate", analyseDateCroissant);
  analyseDateCroissant = !analyseDateCroissant;
});
// +========================================> Statut
let trieStatut = document.querySelector(".trieStatut");
trieStatut.addEventListener("click", () => {
    trieTable("satut", trieStatutCroissant);
    trieStatutCroissant = !trieStatutCroissant;
  });


//laboratoireName, commandeNum, analyseDate, Statut
function trieTable(label, croissant) {
  const trieDuTbleau = commandeData.sort((a, z) => {
    if (a[label] < z[label]) {
      return croissant ? -1 : 1;
    } else {
      return croissant ? 1 : -1;
    }
  });
  tBodyCommande.innerHTML = "";
  commandeData.forEach((element) => {
    tBodyCommande.innerHTML += `<tr>
    <td style="font-size: 18px;width: 49rem;text-align: center;font-weight: bold;border-right: solid 1px;">
      ${element.commandeNum}</td>
    <td
      style="font-size: 18px;width: 25em;padding: 0 40px 0 0;text-align: center;font-weight: bold;border-right: solid 1px;">
      ${element.laboratoireName}</td>
    <td style="font-size: 18px;width:10em ;text-align: center;font-weight: bold;border-right: solid 1px;">
    ${element.analyseDate}</td>
    <td
      style="font-size: 18px;width:rem ;padding: 0 45px ;text-align: center;font-weight: bold;border-right: solid 1px;">
      ${element.satut}</td>
    <td style="font-size: 18px;width:30rem ;text-align: center;font-weight: bold;">Voir</td>
  </tr>`;
  });
}


//===============================================> filtre input de recherche
function recherche(e) {
    tBodyCommande.innerHTML = "";
    commandeData.forEach((element) => {
      if (element.laboratoireName.toLowerCase().includes(e)) {
        tBodyCommande.innerHTML += `<tr>
        <td style="font-size: 18px;width: 49rem;text-align: center;font-weight: bold;border-right: solid 1px;">
          ${element.commandeNum}</td>
        <td
          style="font-size: 18px;width: 25em;padding: 0 40px 0 0;text-align: center;font-weight: bold;border-right: solid 1px;">
          ${element.laboratoireName}</td>
        <td style="font-size: 18px;width:10em ;text-align: center;font-weight: bold;border-right: solid 1px;">
        ${element.analyseDate}</td>
        <td
          style="font-size: 18px;width:rem ;padding: 0 45px ;text-align: center;font-weight: bold;border-right: solid 1px;">
          ${element.satut}</td>
        <td style="font-size: 18px;width:30rem ;text-align: center;font-weight: bold;">Voir</td>
      </tr>`;
      }
    });
  }
  
  const inputSearch = document.getElementById("search");
  inputSearch.addEventListener("input", function () {
    let searchText = inputSearch.value.toLowerCase();
    recherche(searchText);
  });