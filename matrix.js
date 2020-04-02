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
    let counter = 0;
    for (row in document.querySelectorAll('#matrix1Form section')) {
      console.log(document.querySelectorAll('#matrix1Form section'));
      counter ++;
      let rowArray = new Array();
      for (item in document.querySelectorAll('#matrix1Form > section')[row].children) {
        rowArray.push(parseInt(document.querySelectorAll('#matrix1Form > *')[row].children[item].value));
      }
      matrix1.push(rowArray);
    }

    for (row in document.querySelectorAll('#matrix2Form section')) {
      let rowArray = new Array();
      for (item in document.querySelectorAll('#matrix2Form section')[row].children) {
        rowArray.push(parseInt(document.querySelectorAll('#matrix2Form > *')[row].children[item].value));
      }
      matrix2.push(rowArray);
    }
    console.log(counter);
    console.log(matrix1);
    document.getElementById("additionResult").textContent = addmatrix(matrix1, matrix2);
  });
});
