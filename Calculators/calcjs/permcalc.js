document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("submitcalculations").addEventListener("click", function() {
    var result;
    var n = document.getElementById("permn").value;
    var r = document.getElementById("permr").value;
    var factorial = function(int){
      if (int === 0){
        return 1
      }else if (int < 0){
        alert("That is a negative number")
        return;
      }else{
        int = int*factorial(int-1);
        return(int);
      }
    };
    document.getElementById("result").textContent = (factorial(n))/(factorial(n-r));

  });
  });
