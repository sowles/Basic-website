
//ax^2+bx+c


 document.addEventListener("DOMContentLoaded", function() {

   document.getElementById("calculateq").addEventListener("click", function() {

     var a = parseFloat(document.getElementById("QuadFormA").value) || 0;
     var b = parseFloat(document.getElementById("QuadFormB").value) || 0;
     var c = parseFloat(document.getElementById("QuadFormC").value) || 0;
     var x1 = ((-1*b)+(Math.sqrt((Math.pow(b,2)) - (4*a*c)))/(2*a));
     var x2 = ((-1*b)-(Math.sqrt((Math.pow(b,2)) - (4*a*c)))/(2*a));
//document.getElementById("result1").textContent = a+b+c;
     document.getElementById("result1").textContent = x1
     document.getElementById("result2").textContent = x2
   });
 });
