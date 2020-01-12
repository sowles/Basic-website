//place holder variables

//R = required Grade
//G = Goal
//C = Current Grade
//FW = Final Weight

//var R

//Equation
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("submitcalculations").addEventListener("click", function() {
    var result;
    var goal = document.getElementById("currentGrade").value;
    var currentGrade = document.getElementById("wantedgrade").value;
    var finalweight = .01 *document.getElementById("finalweight").value;
    document.getElementById("result").textContent = ((goal-currentGrade)*(1-finalweight))/finalweight;

  });
});
