
let m =  new Date("Dec 24, 2022 09:57:00")
let now = new Date()
let months = (m.getFullYear() - now.getFullYear()) * 12;
months -= now.getMonth();
months += m.getMonth();
months= months <= 0 ? 0 : months;

let years=( m.getFullYear() - now.getFullYear()-months<0?0:m.getFullYear() - now.getFullYear());


let countDownDate = new Date("Dec 24, 2022 09:57:00").getTime();

let counter = setInterval(() => {
  // Get Date Now

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - now;
  let days = Math.floor((dateDiff % (1000 * 60 * 60 * 24*30)) / (1000 * 60 * 60*24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours=hours<=0?0:hours;
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  minutes=minutes<=0?0:minutes;
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  seconds=seconds<=0 ? 0 : seconds;

  document.querySelector("#month").innerHTML = months < 10 ? `0${months}` : months;
  document.querySelector("#day").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector("#hour").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector("#minute").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector("#second").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);