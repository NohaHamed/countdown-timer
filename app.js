const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector(".deadline");


let futureDate = new Date(2020, 8, 28, 15, 0);

let futureDay = futureDate.getDate();
let futureYear = futureDate.getFullYear();

let futureHours = futureDate.getHours();
let smallFutureHours = futureHours > 12 ? futureHours-12 : futureHours;
if (smallFutureHours < 10) {
  smallFutureHours = `0${smallFutureHours}`;
}

let futureMins = futureDate.getMinutes();
if (futureMins < 10) {
  futureMins = `0${futureMins}`;
}

let futureMonth = months[futureDate.getMonth()];

let futureWeekday = weekdays[futureDate.getDay()];
console.log(futureWeekday);

const amOrPm = (futureHours >= 12) ? "PM" : "AM";

giveaway.innerHTML = `Giveaway end on ${futureWeekday}, ${futureDay} ${futureMonth}, ${futureYear}, ${smallFutureHours}:${futureMins} ${amOrPm} `; 

const futureTime = futureDate.getTime();
//console.log(futureTime);
const countHtmls = document.querySelectorAll('.deadline-format h4');

function countDown() {
  const currentTime = new Date().getTime();
  const remainingTime = futureTime - currentTime;

  const remainingDays = remainingTime / (24*60*60*1000);
  const days = Math.floor(remainingDays);

  const remainingHours = (remainingTime % (24*60*60*1000))/(60*60*1000);

  const hours = Math.floor(remainingHours);




  const remainingMinutes = (remainingTime % (60*60*1000))/(60*1000);
  const minutes = Math.floor(remainingMinutes);

  const remainingSeconds = Math.floor((remainingTime % (60*1000))/1000);
  const seconds = Math.floor(remainingSeconds);

  const TimeArr = [days,hours,minutes,seconds];

function format(val) {
  if (val < 10) {
    val = `0${val}`;
  }
  return val;
}

  countHtmls.forEach((value, index) => {
    value.innerHTML = format(TimeArr[index]);
  });

if (remainingTime < 0) {
  clearInterval(count);
  deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
}


}

let count = setInterval(countDown, 1000);

countDown();