
//ax^2+bx+c


 document.addEventListener("DOMContentLoaded", function() {

   document.getElementById("submitcalculations").addEventListener("click", function() {

     var a = document.getElementById("QuadFormA").value;
     var b = document.getElementById("QuadFormB").value;
     var c = .01 * document.getElementById("QuadFormC").value;

     document.getElementById("result").textContent = ((-1*b)+(Math.sqrt((Math.pow(b,2)) - (4*a*c)))/(2*a)); + ((-1*b)-(Math.sqrt((Math.pow(b,2)) - (4*a*c)))/(2*a));

   });
 });
