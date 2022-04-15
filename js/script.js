const items = document.querySelectorAll('.count-item > h3');

//set end date
let countDownDate = new Date(2022, 4, 15, 16, 10, 0, 0).getTime();

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

   console.log(difference);
   
}

let countDownInterval = setInterval(countDownTime, 1000);
countDownTime();