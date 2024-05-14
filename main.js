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

//ゼロの連続入力阻止。→ 後ほど修正



