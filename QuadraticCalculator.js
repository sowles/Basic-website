
//ax^2+bx+c


 document.addEventListener("DOMContentLoaded", function() {

   document.getElementById("calculateq").addEventListener("click", function() {

     var a = document.getElementById("QuadFormA").value;
     var b = document.getElementById("QuadFormB").value;
     var c = document.getElementById("QuadFormC").value;
     var x1 = ((-1*b) + Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a);
     var x2 = ((-1*b) - Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a);
//document.getElementById("result1").textContent = a+b+c;
<h3>X = </h3>
     document.getElementById("result1").textContent = x1

     document.getElementById("result2").textContent = x2
   });
 });
