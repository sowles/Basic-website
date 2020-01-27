document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("submitcalculations").addEventListener("click", function() {

    document.getElementById("result").textContent = document.getElementById("polyn").textContent*(document.getElementById("polyn").textContent-3)/2

  });
