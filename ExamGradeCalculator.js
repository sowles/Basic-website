//place holder variables

//R = required Grade
//G = Goal
//C = Current Grade
//FW = Final Weight

//var R


var result;
var goal = document.getElementById("currentGrade").value;
var currentGrade = document.getElementById("wantedgrade").value;
var finalweight = document.getElementById("finalweight").value;



//Equation

document.getElementById("result").textContent = ((goal-currentGrade)*(100-finalweight))/finalweight;
