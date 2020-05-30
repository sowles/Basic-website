
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("submitcalculations").addEventListener("click", function() {
    var result;
    var initial = document.getElementById("initial").value;
    var ending = document.getElementById("ending").value;
    var dividends = document.getElementById("dividends").value;
    document.getElementById("result").textContent = (ending - initial) + dividends;

  });
});
