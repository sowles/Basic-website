function factfunc(i){
  if (i > 0) {
  i = i*factfunc(i-1)
  return(i);
}else if (i == 0){
  return 1;
}else{
  return 0;
}
};


document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("submitcalculations").addEventListener("click", function() {
    var result;
    var n = document.getElementById("permn").value;
    var r = document.getElementById("permr").value;

    if (n < 0 || r < 0 || (n-r < 0)) {
      document.getElementById("result").textContent = "That is negative";
    }
    else {
      document.getElementById("result").textContent = (factfunc(n))/(factfunc(n-r));
    }
  });
});
