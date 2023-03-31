const LINK = 'https://api.exchangerate-api.com/v4/latest/USD';
const btnClicked = document.getElementById('upd-btn');
const ZONE = document.getElementById('zone');
const DOWNLOAD = document.getElementById('dwn-btn');

let currentRate;

function funcUpd(){
  return fetch(LINK)
  .then(response => response.json())
  .then(data => {
    currentRate = data.rates.UAH;
    ZONE.textContent = `1 USD = ${currentRate} UAH`;
    return currentRate;
  })
  .catch(error => console.error(error));
}

let rate;

btnClicked.addEventListener("click", async function() {
  try {
    rate = await funcUpd();
    console.log(rate);
    return rate;
  } catch(error) {
    console.error(error);
  }
});

DOWNLOAD.addEventListener("click", jsonDownload);

function jsonDownload(){
  let myJSON = {
    text: rate
  };
  
  let jsonStringifyed = JSON.stringify(myJSON);
  
  let downloadLink = document.createElement("a");
  downloadLink.download = "31.03.json";
  downloadLink.innerHTML = "Download JSON";
  
  let myBlob = new Blob([jsonStringifyed], {type: "application/json"});
  
  downloadLink.href = URL.createObjectURL(myBlob);
  
  document.body.appendChild(downloadLink);
}
