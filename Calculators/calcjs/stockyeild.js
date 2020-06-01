document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submitcalculations").addEventListener("click", function() {
    var initial = parseInt(document.getElementById("initial").value);
    var ending = parseInt(document.getElementById("ending").value);
    var dividends = parseInt(document.getElementById("dividends").value);
    document.getElementById("result").textContent = "$" + (ending - initial) + dividends;
  });
});
