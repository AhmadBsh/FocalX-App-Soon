
var m =  new Date("Mar 8, 2023 09:57:00")
var now = new Date()
var months = (m.getFullYear() - now.getFullYear()) * 12;
months -= now.getMonth();
months += m.getMonth();
months= months <= 0 ? 0 : months;

var countDownDate = new Date("Mar 8, 2023 09:57:00").getTime();

var counter = setInterval(() => {
  // Get Date Now
  var nowDate = new Date().getTime()
  // Find The Date Difference Between Now And Countdown Date
  var dateDiff = countDownDate - nowDate;

  var days = Math.floor((dateDiff % (1000 * 60 * 60 * 24*30)) / (1000 * 60 * 60*24));
  days=days<=0?0:days;
  var hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours=hours<=0?0:hours;
  var minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  minutes=minutes<=0?0:minutes;
  var seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  seconds=seconds<=0?0:seconds;

  document.querySelector("#month").innerHTML = months < 10 ? `0${months}` : months;
  document.querySelector("#day").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector("#hour").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector("#minute").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector("#second").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);