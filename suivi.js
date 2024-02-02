// tableau d'objet
let tBodySuivi = document.querySelector("#tbodySuivi");
let suiviData = [
  {
    lot: "Cyanur libre",
    etat : "Recu",
    Date: "29/03/2023",
    rapport: "Disponnible",
  },
  {
    lot: "CO2 libre",
    etat : "Non Recu",
    Date: "04/03/2023",
    rapport: "Disponnible",
  },
  {
    lot: "Couleur brute",
    etat : "Recu",
    Date: "21/03/2023",
    rapport: "Non Disponnible",
  },
  {
    lot: "Conductivité electrique",
    etat : "Recu",
    Date: "14/03/2023",
    rapport: "Non Disponnible",
  },
  {
    lot: "Clhorire",
    etat : "Non Recu",
    Date: "31/03/2023",
    rapport: "Non Disponnible",
  },
  {
    lot: "w",
    etat : "Recu",
    Date: "30/03/2023",
    rapport: "Disponnible",
  },
  {
    lot: "E20230190",
    etat : "Recu",
    Date: "13/03/2023",
    rapport: "Disponnible",
  },
  {
    lot: "pH/Temperature",
    etat : "Non Recu",
    Date: "01/03/2023",
    rapport: "Non Disponnible",
  },
  {
    lot: "z",
    etat : "Recu",
    Date: "16/03/2023",
    rapport: "Non Disponnible",
  },
  {
    lot: "y",
    etat : "Non Recu",
    Date: "11/03/2023",
    rapport: "Disponnible",
  },
 
];
// ==================================================================
tBodySuivi.innerHTML ="";
suiviData.forEach((element) => {
    tBodySuivi.innerHTML += `<tr>
  <td style="font-size: 18px;width: 49rem;text-align: center;font-weight: bold;border-right: solid 1px;">${element.lot} </td>
  <td style="font-size: 18px;width: 25em;padding: 0 40px 0 0;text-align: center;font-weight: bold;border-right: solid 1px;">${element.etat}</td>
  <td style="font-size: 18px;width:10em ;text-align: center;font-weight: bold;border-right: solid 1px;">${element.Date}</td>
  <td style="font-size: 18px;width:rem ;padding: 0 45px ;text-align: center;font-weight: bold;border-right: solid 1px;">${element.rapport}</td>
  <td  style="font-size: 18px;width:30rem ;text-align: center;font-weight: bold;"><button>Voir</button> </td>
</tr>`;
});
// ==================================================================
let trie = document.querySelectorAll(".trie");
let lotCroissant = true;
let etatCroissant = true;
let DateCroissant = true;
let rapportCroissant = true;
// +=======================================>  Lot
let trieLot = document.querySelector(".trieLot");
trieLot.addEventListener("click", () => {
  trieTable("lot", lotCroissant);
  lotCroissant = !lotCroissant;
});
// +=======================================> Etat
let trieEtat = document.querySelector(".trieEtat");
trieEtat.addEventListener("click", () => {
  trieTable("etat", etatCroissant);
  etatCroissant = !etatCroissant;
});
// +========================================> Date
let trieDate = document.querySelector(".trieDate");
trieDate.addEventListener("click", () => {
  trieTable("Date", DateCroissant);
  DateCroissant = !DateCroissant;
});
// +========================================> Statut
let trieStatut = document.querySelector(".trieStatut");
trieStatut.addEventListener("click", () => {
    trieTable("rapport", rapportCroissant);
    rapportCroissant = !rapportCroissant;
  });


  //laboratoireName, commandeNum, analyseDate, Statut
function trieTable(label, croissant) {
    const trieDuTbleau = suiviData.sort((a, z) => {
      if (a[label] < z[label]) {
        return croissant ? -1 : 1;
      } else {
        return croissant ? 1 : -1;
      }
    });
    tBodySuivi.innerHTML = "";
   suiviData.forEach((element) => {
      tBodySuivi.innerHTML +=  `<tr>
      <td style="font-size: 18px;width: 49rem;text-align: center;font-weight: bold;border-right: solid 1px;">${element.lot} </td>
      <td style="font-size: 18px;width: 25em;padding: 0 40px 0 0;text-align: center;font-weight: bold;border-right: solid 1px;">${element.etat}</td>
      <td style="font-size: 18px;width:10em ;text-align: center;font-weight: bold;border-right: solid 1px;">${element.Date}</td>
      <td style="font-size: 18px;width:rem ;padding: 0 45px ;text-align: center;font-weight: bold;border-right: solid 1px;">${element.rapport}</td>
      <td style="font-size: 18px;width:30rem ;text-align: center;font-weight: bold;"><button>Voir</button> </td>
    </tr>`;
    });
  }


  