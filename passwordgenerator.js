function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const submit = document.getElementById("submit");
submit.addEventListener("press", function() {
  document.getElementById("result").textContent = getRandomInt(submit.value);
});
