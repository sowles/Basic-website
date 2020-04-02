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


document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("calculateMatrixButton").addEventListener("click", function() {
    let matrix1 = new Array();
    let matrix2 = new Array();

    for (row in document.querySelectorAll('#matrix1Form > *')) {
      let rowArray = new Array();
      for (item in document.querySelectorAll('#matrix1Form > *')[row].children) {
        rowArray.push(parseInt(document.querySelectorAll('#matrix1Form > *')[row].children[item].value));
      }
      matrix1.push(rowArray);
    }

    for (row in document.querySelectorAll('#matrix2Form > *')) {
      let rowArray = new Array();
      for (item in document.querySelectorAll('#matrix2Form > *')[row].children) {
        rowArray.push(parseInt(document.querySelectorAll('#matrix2Form > *')[row].children[item].value));
      }
      matrix2.push(rowArray);
    }
    console.log(matrix1);
    document.getElementById("additionResult").textContent = addmatrix(matrix1, matrix2);
  });
});
