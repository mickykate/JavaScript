<<<<<<< HEAD

const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let stopTime = 0;
let timeoutID;

function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours()-9).padStart(2, '0');
  const m = String(currentTime.getMinutes()).padStart(2, '0');
  const s = String(currentTime.getSeconds()).padStart(2, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(3, '0');

  time.textContent = `${h}:${m}:${s}.${ms}`;
  timeoutID = setTimeout(displayTime, 10);
}

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  startTime = Date.now();
  displayTime();
});

stopButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});

resetButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  time.textContent = '00:00:00.000';
  stopTime = 0;
});


=======
'use strict'

let result = document.getElementsByClassName('display')

function calc_number(btn) {
    if (btn.value == "=") {
      document.calculator.display.value = eval(document.calculator.display.value);
    } else if (btn.value == "AC") {
      document.calculator.display.value = "";
    } else {
      if (btn.value == "×") {
        btn.value = "*";
      } else if (btn.value == "÷") {
        btn.value = "/";
      }
      document.calculator.display.value += btn.value;
      document.calculator.multi_btn.value = "×";
      document.calculator.div_btn.value = "÷";
    }
  }

//四則演算の連続入力制御・→ 修正中
function calc_oprt(btn) {
  if (result.value.slice(-1) === '+') {
    return;
  } else if (result.value.slice(-1) === '-') {
    return;
  } else if (result.value.slice(-1) === '×') {
    return;
  } else if (result.value.slice(-1) === '÷') {
    return;
  } else if (result.value.slice(-1) === '.') {
    return;
  } else {
    result.value = result.value + btn.value;
  }
}
//ゼロの連続入力阻止。→ 後ほど修正
if (value == "0" || value == "00") {
  return;
}

>>>>>>> origin/main


