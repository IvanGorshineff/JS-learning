const counterElement = document.querySelector('#counter');
const btnStart = document.querySelector('#start');
const btnPause = document.querySelector('#pause');
const btnReset = document.querySelector('#reset');
let counter = 0;
let timerID;

btnStart.onclick = function () {
  timerID = setInterval(() => {
    counter++;
    counterElement.textContent = counter;
  }, 1000);
}

btnPause.onclick = function () {
  clearInterval(timerID);
}

btnReset.onclick = function () {
  clearInterval(timerID);
  counter = 0;
  counterElement.textContent = counter;
}