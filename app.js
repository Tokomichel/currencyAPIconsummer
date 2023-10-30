let mainCur = document.querySelector(".select");
let curNumber = document.querySelector(".number");
let resultCur = document.querySelector(".select1");
let resultNumber = document.querySelector(".number1");
let mainData;

// console.log(mainCur.value);
// console.log(curNumber.innerText);
// console.log(resultCur);
// console.log(resultNumber);


load('USD');

function run()
{
  resultNumber.value = (curNumber.value * mainData.conversion_rates[resultCur.value]) / mainData.conversion_rates[mainCur.value]; 
}

function getDataFromAPI(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/c97f2e85857936bd2dcbceae/latest/${currency}`) // Effectue une requête GET à l'URL de l'API
      .then(response => response.json()) // Récupère la réponse et la convertit en JSON
      .then(data => {
        console.log("got it");
        return data; // Renvoie les données récupérées de l'API
      })
      .catch(error => {
        console.log('Erreur lors de la récupération des données de l\'API :', error);
        throw error; // Lance une erreur en cas d'échec de la requête
      });
  }
  

async function load(currency)
{
  let res = getDataFromAPI(currency)
  .then(data => {
    console.log('Données récupérées de l\'API :', data);
    // Utilisez les données récupérées comme vous le souhaitez
    mainData = data;
    mainCur.innerHTML = "";
    for (const key in data.conversion_rates)
    {
      //  console.log(key);
        mainCur.innerHTML +="<option value=\"" + key + "\" selected>" + key + "</option>";
       mainCur.innerHTML +="<option value=\"" + key + "\">" + key + "</option>";  
    }
    
    resultCur.innerHTML = "";
    for (const key in data.conversion_rates)
    {
    //  console.log(key);
     if (key == "XAF")
     {
      resultCur.innerHTML +="<option value=\"" + key + "\" selected>" + key + "</option>";
     }
     resultCur.innerHTML +="<option value=\"" + key + "\">" + key + "</option>";  
    }
  
  })
  .catch(error => {
    // Gérez les erreurs ici
    console.log('Erreur lors de la récupération des données de l\'API :', error);
    throw error;
  });

  // on charge les datas de l'api
 


 // console.log(res);
}

function lo(res)
{
    mainCur.innerHTML = "";
    for (const key in res.conversion_rates)
    {
       console.log(key);
        mainCur.innerHTML +="<option value=\"" + key + "\" selected>" + key + "</option>";
       mainCur.innerHTML +="<option value=\"" + key + "\">" + key + "</option>";  
    }
    
    resultCur.innerHTML = "";
    for (const key in res.conversion_rates)
    {
     console.log(key);
     if (key == "XAF")
     {
      resultCur.innerHTML +="<option value=\"" + key + "\" selected>" + key + "</option>";
     }
     resultCur.innerHTML +="<option value=\"" + key + "\">" + key + "</option>";  
    }
  
}