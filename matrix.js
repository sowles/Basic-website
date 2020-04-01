
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("calculateMatrixButton").addEventListener("click", function() {
let matrix1 = new Array(
                        [value.document.getElementById("matrixa11"), value.document.getElementByName("matrixa12"), value.document.getElementByName("matrixa13")],
                        [value.document.getElementById("matrixa21"), value.document.getElementById("matrixa22"), value.document.getElementById("matrixa23")],
                        [value.document.getElementById("matrixa31"), value.document.getElementById("matrixa32"), value.document.getElementById("matrixa33")]
)

let matrix2 = new Array(
                        [value.document.getElementById("matrixb11"), value.document.getElementByName("matrixb12"), value.document.getElementByName("matrixb13")],
                        [value.document.getElementById("matrixb21"), value.document.getElementById("matrixb22"), value.document.getElementById("matrixb23")],
                        [value.document.getElementById("matrixb31"), value.document.getElementById("matrixb32"), value.document.getElementById("matrixb33")]
)

function addmatrix (matrix1, matrix2){
  let addmatrixFinal = new Array();

  for (row in matrix1) {
    for (item in matrix1[row]) {
      addmatrixFinal.push(matrix1[row][item] + matrix2[row][item]);
    }
  }

  return addmatrixFinal;
}
addmatrixFinal = document.getElementById("result").textContent;
function multmatrix(matrix1, matrix2){
  let matrixFinal = new Array();

  for (row in matrix1) {
    for (item in matrix1[row]) {
      matrixFinal.push(matrix1[row][item] * matrix2[item][row]);
    }
  }

  return matrixFinal;
}
matrixFinal = document.getElementById("multresult").textContent;
console.log(multmatrix(matrix1, matrix2).toString());
)}
