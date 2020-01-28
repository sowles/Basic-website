document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("submitcalculations").addEventListener("click", function() {
    var result;
    var numofelements = document.getElementById("elementinput");
    var maxnum = document.getElementById("digitinput");
    var evenconstraint = document.getElementById("constraintinput");
    document.getElementById("result").value = (Math.pow(maxnum,numofelements))-(Math.pow(constraintinput,numofelements));

  });
  });
