// tableau d'objet
const tBodyFactur = document.querySelector('#tBodyFactur')
const factureData = [
    {
      factureNum: '0002',
      laboratoireName: 'Biochimie',
      analyseDate: '10/03/2023'
    },
    {
      factureNum: '0003',
      laboratoireName: 'Enval',
      analyseDate: '11/03/2023'
    },
    {
      factureNum: '0004',
      laboratoireName: 'Biologie',
      analyseDate: '12/03/2023'
    },
    {
      factureNum: '0005',
      laboratoireName: 'Biochimie',
      analyseDate: '13/03/2023'
    },
    {
      factureNum: '0006',
      laboratoireName: 'Enval',
      analyseDate: '14/03/2023'
    },
    {
      factureNum: '0006',
      laboratoireName: 'Biologie',
      analyseDate: '14/03/2023'
    }
  ];

  console.log(tBodyFactur);
  tBodyFactur.innerHTML = ''
 factureData.forEach(element => {
    tBodyFactur.innerHTML += `<tr>
    <td style="font-size: 18px;width: 49rem;text-align: center;font-weight: bold;border-right: solid 1px;">${element.factureNum}</td>
    <td style="font-size: 18px;width: 25em;padding: 0 40px 0 0;text-align: center;font-weight: bold;border-right: solid 1px;">${element.laboratoireName}</td>
    <td style="font-size: 18px;width:10em ;text-align: center;font-weight: bold;border-right: solid 1px;">${element.analyseDate}</td>

    <td  style="font-size: 18px;width:30rem ;text-align: center;font-weight: bold;">voir</td>
</tr>`
 });

 let filtrage = factureData.filter((x) => {
    if (x.laboratoireName === 'Biochimie' && x.laboratoireName === 'Biochimie' && x.laboratoireName === 'Biochimie' ) {
        return true;
    }
 })



 // input de recherche
const inputSearch = document.getElementById("search");
inputSearch.addEventListener("input", function () {
  let searchText = inputSearch.value.toLowerCase();
  recherche(searchText);
});