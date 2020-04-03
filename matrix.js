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
// wait our chat wasn't commented out that could make it not work. push again.
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("calculateMatrixButton").addEventListener("click", function() {
    let matrix1 = new Array();
    let matrix2 = new Array();
    for (let row of document.querySelectorAll('#matrix1Form > section')) {
      let rowArray = new Array();
      for (let item in row.children) {
        rowArray.push(parseInt(row.children[item].value));
      }
      matrix1.push(rowArray);
    }

    for (let row of document.querySelectorAll('#matrix2Form > section')) {
      let rowArray = new Array();
      for (let item in row.children) {
        rowArray.push(parseInt(row.children[item].value));
      }
      matrix2.push(rowArray);
    }
    console.log(matrix1);
    console.log(matrix2);
    document.getElementById("additionResult").textContent = addmatrix(matrix1, matrix2);
  });
});
