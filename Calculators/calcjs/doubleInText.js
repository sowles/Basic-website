document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("calculate").addEventListener("click", function() {

    let str = "chung 82 chung"
    var toCharArray =  str.split('');
    var sum = 0;
    for (let i = 0; i < toCharArray.length(); i++) {
      if(toCharArray[i]%1 == toCharArray[i]){
        sum++;
      }
    }
    // var a = document.getElementById("QuadFormA").value;
    // var b = document.getElementById("QuadFormB").value;
    // var c = document.getElementById("QuadFormC").value;
    // var x1 = ((-1*b) + Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a);
    // var x2 = ((-1*b) - Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a);
//document.getElementById("result1").textContent = a+b+c;

    document.getElementById("result").textContent = sum;


  });
});
