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

    matrix1Form = document.getElementById("matrix1Form");
    for (row in matrix1Form.childNodes) {
      matrix1.push(new Array());
      for (item in matrix1Form.childNodes[row].childNodes) {
        matrix1[row].push(item.value);
      }
    }
    matrix2Form = document.getElementById("matrix2Form");
    for (row in matrix2Form.childNodes) {
      matrix2.push(new Array());
      for (item in matrix2Form.childNodes[row].childNodes) {
        matrix2[i].push(item.value);
      }
    }
    document.getElementById("result").textContent = addmatrix(matrix1, matrix2);
  });
});
