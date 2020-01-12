function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const maxnum = document.getElementById("inputMaxnum");
maxnum.addEventListener("keyup", function() {
  document.getElementById("rannum").textContent = "Random Number between 0 and " + maxmun + ": " + getRandomInt(maxnum.value);
});
