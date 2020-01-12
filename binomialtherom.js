document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("subcalculations").addEventListener("click", function() {
    function binomial(n, k) {
     if ((typeof n !== 'number') || (typeof k !== 'number'))
  return false;
    var coeff = 1;
    for (var x = n-k+1; x <= n; x++) coeff *= x;
    for (x = 1; x <= k; x++) coeff /= x;
    return coeff;
}

console.log(binomial(8,3));
console.log(binomial(10,2));

    document.getElementById("result").textContent = (binomial(document.getElementById("N").value,document.getElementById("K").value)) ;

  });
});
