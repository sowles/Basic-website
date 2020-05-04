document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("submitcalculations").addEventListener("click", function() {
    let invalidResult = false;
    var result;
    var n = document.getElementById("permn").value;
    var r = document.getElementById("permr").value;
    var factorial = function(int){
      if (int === 0){
        return 1;
      }
      else if (int < 0) {
        invalidResult = true;
      }
      else {
        int = int*factorial(int-1);
        console.log(1)
        return(int);
      }
    };
    if (invalidResult) {
      document.getElementById("result").textContent = "Yo, you're negative dawg";
    }
    else {
      document.getElementById("result").textContent = (factorial(n))/(factorial(n-r));
    }
  });
  });
