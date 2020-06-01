document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submitcalculations").addEventListener("click", function() {
    const initial = parseInt(document.getElementById("initial").value);
    const ending = parseInt(document.getElementById("ending").value);
    const dividends = parseInt(document.getElementById("dividends").value);
    document.getElementById("result").textContent = "$" + ((ending - initial) + dividends);
  });
});
