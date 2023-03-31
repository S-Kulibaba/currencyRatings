const RATEBTN = document.getElementById('rat-btn');

let firstDay, secondDay, thirdDay, fourthDay, fifthDay;

RATEBTN.addEventListener("click", (event) =>{
  Promise.all([firstFunc(), secondFunc(), thirdFunc(), fourthFunc(), fifthFunc()])
    .then(() => {
      const DAYS = [firstDay, secondDay, thirdDay, fourthDay, fifthDay];
      let ctx = document.querySelector('#myChart').getContext('2d');
      ctx.canvas.parentNode.style.height = '500px'
      let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [27.03, 28.03, 29.03, 30.03, 31.03],
            datasets: [{
              label: 'Value',
              data: DAYS,
              backgroundColor: ['rgb(255, 99, 132)'],
              borderColor: ['rgb(255, 99, 132)'],
              borderWidth: 4,
            }]
        },
        options: {
          maintainAspectRario: false,
        },
      });
    })
    .catch(error => console.error(error));
});

function firstFunc(){
  return fetch('/json/27.03.json')
  .then(response => response.json())
  .then(data => {
    firstDay = data.text;
    console.log(data);
    return firstDay;
  })
  .catch(error => console.error(error));
  return fifthData = fifthDay
}
function secondFunc(){
  return  fetch('/json/28.03.json')
  .then(response => response.json())
  .then(data => {
    secondDay = data.text;
    console.log(data);
    return secondDay;
  })
  .catch(error => console.error(error));
}
function thirdFunc(){
  return  fetch('/json/29.03.json')
  .then(response => response.json())
  .then(data => {
    thirdDay = data.text;
    console.log(data);
    return thirdDay;
  })
  .catch(error => console.error(error));
}
function fourthFunc(){
  return  fetch('/json/30.03.json')
  .then(response => response.json())
  .then(data => {
    fourthDay = data.text;
    console.log(data);
    return fourthDay;
  })
  .catch(error => console.error(error));
}
 function fifthFunc(){
  return   fetch('/json/31.03.json')
   .then(response => response.json())
   .then(data => {
    fifthDay = data.text;
    console.log(data);
    return fifthDay;
   })
   .catch(error => console.error(error));
 }
