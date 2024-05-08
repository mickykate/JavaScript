let state = "start";
let mode = "integer_mode";


function calc_number(btn) {
    if(btn.value == "=") {
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
  
  






