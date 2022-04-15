const items = document.querySelectorAll('.count-item > h3');
let container = document.getElementById('box');

//set end date
let countDownDate = new Date(2022, 3, 15, 15, 59, 0, 0).getTime();

// set time properties
const day = 24*60*60*1000;
const hour = 60*60*1000;
const minute = 60*1000;

function countDownTime(){
   let difference = countDownDate - Date.now();

   if(difference < 0){
   clearInterval(countDownInterval);
   container.innerHTML = '<p class="count-item">Время вышло!</p>';
   }
   
   // get time values
   let daysCount = Math.floor(difference / day);
   let hoursCount = Math.floor((difference % day) / hour);
   let minutesCount = Math.floor((difference % hour) / minute);
   let secondsCount = Math.floor((difference % minute) / 1000);

   let timeValues = [daysCount, hoursCount, minutesCount, secondsCount];

   items.forEach(function setTime (item, index){
      item.textContent = timeValues[index];
   });
}

let countDownInterval = setInterval(countDownTime, 1000);
countDownTime();