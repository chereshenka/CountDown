const items = document.querySelectorAll('.count-item > h3');
let container = document.getElementById('box');

//set end date
let countDownDate = new Date(2022, 3, 15, 15, 59, 0, 0).getTime();

function countDownTime(){
   let difference = countDownDate - Date.now();

   // set time properties

   let day = 24*60*60*1000;
   let hour = 60*60*1000;
   let minute = 60*1000;

   // get time values
   
   let daysCount = Math.floor(difference / day);
   let hoursCount = Math.floor((difference % day) / hour);
   let minutesCount = Math.floor((difference % hour) / minute);
   let secondsCount = Math.floor((difference % minute) / 1000);

   let timeValues = [daysCount, hoursCount, minutesCount, secondsCount];

   items.forEach(function setTime (item, index){
      item.textContent = timeValues[index];
   });

   if(difference < 0){
   clearInterval(countDownInterval);
   container.innerHTML = '<p class="count-item">Время вышло!</p>';
   }

}

let countDownInterval = setInterval(countDownTime, 1000);
countDownTime();