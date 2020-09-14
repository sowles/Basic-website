document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("calculateq").addEventListener("click", function() {

    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    // var formResult = (Math.sqrt(Math.pow((x1 - x2),2) + (Math.pow((y1 - y2),2))));
    var formResult = (Math.sqrt(Math.pow((x1 - x2), 2) + (Math.pow(y1-y2), 2)));
    console.log(formResult)

//document.getElementById("result1").textContent = a+b+c;

document.getElementById("result2").textContent = formResult

// document.getElementById("result1").textContent = compoundedcont
//
// document.getElementById("result3").textContent = compounded
//
// document.getElementById("result4").textContent = compoundedcont
  });
});
