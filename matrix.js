function addmatrix (matrix1, matrix2){
  let addmatrixFinal = new Array();

  for (row in matrix1) {
    for (item in matrix1[row]) {
      addmatrixFinal.push(matrix1[row][item] + matrix2[row][item]);
    }
  }

  return addmatrixFinal;
}

function multmatrix(matrix1, matrix2){
  let matrixFinal = new Array();

  for (row in matrix1) {
    for (item in matrix1[row]) {
      matrixFinal.push(matrix1[row][item] * matrix2[item][row]);
    }
  }

  return matrixFinal;
}
// one last time IT WORKS!!! YYYYYAAAAAAAAAAAAAYAYYAYAYAYAA
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("calculateMatrixButton").addEventListener("click", function() {
    let matrix1 = new Array();
    let matrix2 = new Array();

    for (let row of document.querySelectorAll('#matrix1Form > section')) {
      let rowArray = new Array();
      for (let item of row.children) {
        rowArray.push(parseInt(item.value));
      }
      matrix1.push(rowArray);
    }

    for (let row of document.querySelectorAll('#matrix2Form > section')) {
      let rowArray = new Array();
      for (let item of row.children) {
        rowArray.push(parseInt(item.value));
      }
      matrix2.push(rowArray);
    }
    document.getElementById("additionResult").textContent = addmatrix(matrix1, matrix2);
  });
});
