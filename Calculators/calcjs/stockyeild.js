document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submitcalculations").addEventListener("click", function() {
    const initial = parseInt(document.getElementById("initial").value);
    const ending = parseInt(document.getElementById("ending").value);
    const dividends = parseInt(document.getElementById("dividends").value);
    const sharesBought = parseInt(document.getElementById("sharesBought").value);
    const sharesSold = parseInt(document.getElementById("sharesBought").value);
    document.getElementById("result").textContent = "Total yield: $" + (((ending * sharesSold) - (initial * sharesBought)) + dividends);
  });
});
