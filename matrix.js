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

    for (row in document.querySelector('#matrix1Form').children) {
      let rowArray = new Array();
      // for (item in document.querySelector('#matrix1Form').children[row].childNodes) {
        rowArray.push("duck");
      // }
      matrix1.push(rowArray);
    }
    // for (row in document.querySelector('#matrix2Form').children) {
    //   matrix2.push(new Array());
    //   for (item in document.querySelector('#matrix2Form').children[row].childNodes) {
    //     matrix2[row].push(item.value);
    //   }
    // }
    // document.getElementById("additionResult").textContent = addmatrix(matrix1, matrix2);
    console.log(matrix1);
  });
});
