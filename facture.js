// tableau d'objet
const tBodyFactur = document.querySelector("#tBodyFactur");
const factureData = [
  {
    factureNum: "0002",
    laboratoireName: "Biochimie",
    analyseDate: "10/03/2023",
  },
  {
    factureNum: "0003",
    laboratoireName: "Enval",
    analyseDate: "11/03/2023",
  },
  {
    factureNum: "0004",
    laboratoireName: "Biologie",
    analyseDate: "12/03/2023",
  },
  {
    factureNum: "0005",
    laboratoireName: "Biochimie",
    analyseDate: "13/03/2023",
  },
  {
    factureNum: "0006",
    laboratoireName: "Enval",
    analyseDate: "14/03/2023",
  },
  {
    factureNum: "0006",
    laboratoireName: "Biologie",
    analyseDate: "14/03/2023",
  },
];

// ===================================================> Affichade des element dans le tableau

tBodyFactur.innerHTML = "";
factureData.forEach((element) => {
  tBodyFactur.innerHTML += `<tr>
    <td style="font-size: 18px;width: 49rem;text-align: center;font-weight: bold;border-right: solid 1px;">${element.factureNum}</td>
    <td style="font-size: 18px;width: 25em;padding: 0 40px 0 0;text-align: center;font-weight: bold;border-right: solid 1px;">${element.laboratoireName}</td>
    <td style="font-size: 18px;width:10em ;text-align: center;font-weight: bold;border-right: solid 1px;">${element.analyseDate}</td>

    <td style="font-size: 18px;width:30rem ;text-align: center;font-weight: bold;"> <button>Voir</button> </td>
</tr>`;
});

// ====================================================> Affichade des element dans le tableau par ordre alphabetique
///evenement click
let trie = document.querySelectorAll(".trie");
let trieFacture = document.querySelector(".trieFacture");
let trieLaboratoire = document.querySelector(".trieLaboratoire");
let trieDate = document.querySelector(".trieDate");
console.log("hello", trie);
let factureNumCroissant = true;
let laboratoireNameCroissant = true;
let analyseDateCroissant = true;
// +=======================================
trieFacture.addEventListener("click", () => {
  trieTable("factureNum", factureNumCroissant);
  factureNumCroissant = !factureNumCroissant;
});
// +========================================
trieLaboratoire.addEventListener("click", () => {
  trieTable("laboratoireName", laboratoireNameCroissant);
  laboratoireNameCroissant = !laboratoireNameCroissant;
});

trieDate.addEventListener("click", () => {
  trieTable("analyseDate", analyseDateCroissant);
  analyseDateCroissant = !analyseDateCroissant;
});

//laboratoireName, factureNum, analyseDate
function trieTable(label, croissant) {
  const trieDuTbleau = factureData.sort((a, z) => {
    if (a[label] < z[label]) {
      return croissant ? -1 : 1;
    } else {
      return croissant ? 1 : -1;
    }
  });
  tBodyFactur.innerHTML = "";
  factureData.forEach((element) => {
    tBodyFactur.innerHTML += `<tr>
  <td style="font-size: 18px;width: 49rem;text-align: center;font-weight: bold;border-right: solid 1px;">${element.factureNum}</td>
  <td style="font-size: 18px;width: 25em;padding: 0 40px 0 0;text-align: center;font-weight: bold;border-right: solid 1px;">${element.laboratoireName}</td>
  <td style="font-size: 18px;width:10em ;text-align: center;font-weight: bold;border-right: solid 1px;">${element.analyseDate}</td>

  <td style="font-size: 18px;width:30rem ;text-align: center;font-weight: bold;"> <button>Voir</button> </td>
  </tr>`;
  });
}

//===============================================> filtre input de recherche
function recherche(e) {
  tBodyFactur.innerHTML = "";
  factureData.forEach((element) => {
    if (element.laboratoireName.toLowerCase().includes(e)) {
      tBodyFactur.innerHTML += `<tr>
    <td style="font-size: 18px;width: 49rem;text-align: center;font-weight: bold;border-right: solid 1px;">${element.factureNum}</td>
    <td style="font-size: 18px;width: 25em;padding: 0 40px 0 0;text-align: center;font-weight: bold;border-right: solid 1px;">${element.laboratoireName}</td>
    <td style="font-size: 18px;width:10em ;text-align: center;font-weight: bold;border-right: solid 1px;">${element.analyseDate}</td>

    <td style="font-size: 18px;width:30rem ;text-align: center;font-weight: bold;"> <button>Voir</button> </td>
    </tr>`;
    }
  });
}

const inputSearch = document.getElementById("search");
inputSearch.addEventListener("input", function () {
  let searchText = inputSearch.value.toLowerCase();
  recherche(searchText);
});




// navbar profile
const avatarNav = document.getElementById('avatarNav');
  avatarNav.src = JSON.parse(localStorage.getItem('source'));