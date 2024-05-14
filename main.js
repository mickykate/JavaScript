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



