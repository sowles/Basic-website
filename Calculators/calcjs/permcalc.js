function factorial(int){
  if (int > 0) {
    int = int*factorial(int-1);
    console.log(1)
    return(int);
  }
  else if (int == 0) {
    return 1;
  }
  else {
    return 0;
  }
};


document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("submitcalculations").addEventListener("click", function() {
    var result;
    var n = document.getElementById("permn").value;
    var r = document.getElementById("permr").value;

    if (n < 0 || r < 0 || (n-r < 0)) {
      document.getElementById("result").textContent = "Yo, you're negative dawg";
    }
    else {
      document.getElementById("result").textContent = (factorial(n))/(factorial(n-r));
    }
  });
});
