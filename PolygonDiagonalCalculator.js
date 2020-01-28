document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("submitcalculations").addEventListener("click", function() {
    var result;
    var sides = document.getElementById("polyn").value;
    document.getElementById("result").textContent = sides*(sides-3)/2;

  });
  });
