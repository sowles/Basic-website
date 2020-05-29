
//ax^2+bx+c


 document.addEventListener("DOMContentLoaded", function() {

   document.getElementById("calculateq").addEventListener("click", function() {

     var p = document.getElementById("p").value;
     var r = (document.getElementById("r").value/100);
     var t = document.getElementById("t").value;
     var n = document.getElementById("n").value;
     var e = 2.71828;
     var compounded = p*Math.pow(1+(r/n),n*t);
     var compoundedcont = Math.pow(p*e,r*t);
//document.getElementById("result1").textContent = a+b+c;

     document.getElementById("result1").textContent = compounded

     document.getElementById("result2").textContent = compoundedcont
   });
 });
