let seconds = 10;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;

let status = "stopped";
//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch() {
  //
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
    if (minutes < 0) {
      minutes = 59;
      hours--;
      if (hours < 0) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        document.getElementById("display").innerHTML = "00:00:00 Timer Expired";
      }
    }
  }
  //If seconds/minutes/hours are only one digit, add a leading 0 to the value
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }
  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }
  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }
  //Display updated time values to user
  document.getElementById("display").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}
function start() {
  if (status === "stopped")
    //Sart the stopwatch (by calling the setInterval() function)
    interval = window.setInterval(stopWatch, 1000);
  document.getElementById("start");
  status = "started";
}
function pause() {
  window.clearInterval(interval);
  document.getElementById("stop");
  status = "stopped";
}
//Function to reset the stopwatch
function reset() {
  window.clearInterval(interval);
  seconds = 60;
  minutes = 1;
  hours = 0;
  document.getElementById("display").innerHTML = "00:1:00";
  document.getElementById("start").innerHTML = "Start";
  // document.getElementById("stop").innerHTML = "stop";
}
