function calculate() {
  //___________________________________________________________________________________________
  //Matrix Bank
      //Determinant and Inverse will be taken of Matrixa
  var matrixa = [document.getElementById("matrixa11").value,document.getElementById("matrixa12").value,document.getElementById("matrixa13").value,document.getElementById("matrixa21").value,document.getElementById("matrixa22").value,document.getElementById("matrixa23").value,document.getElementById("matrixa31").value,document.getElementById("matrixa32").value,document.getElementById("matrixa33").value]
  var matrixb = [1,2,3,4,5,6,7,8,9]
  //___________________________________________________________________________________________
  //Equation Bank is legal and cool and cooler


  //Matrix Multiplier
  var Oneone = ((matrixa[0]*matrixb[0])+(matrixa[1]*matrixb[3])+(matrixa[2]*matrixb[6]))
  var Onetwo = ((matrixa[0]*matrixb[1])+(matrixa[1]*matrixb[4])+(matrixa[2]*matrixb[7]))
  var Onethree = ((matrixa[0]*matrixb[2])+(matrixa[1]*matrixb[5])+(matrixa[2]*matrixb[8]))
  var Twoone = ((matrixa[3]*matrixb[0])+(matrixa[4]*matrixb[3])+(matrixa[5]*matrixb[6]))
  var Twotwo = ((matrixa[3]*matrixb[1])+(matrixa[4]*matrixb[4])+(matrixa[5]*matrixb[7]))
  var Twothree = ((matrixa[3]*matrixb[2])+(matrixa[4]*matrixb[5])+(matrixa[5]*matrixb[8]))
  var Threeone = ((matrixa[6]*matrixb[0])+(matrixa[7]*matrixb[3])+(matrixa[8]*matrixb[6]))
  var Threetwo = ((matrixa[6]*matrixb[1])+(matrixa[7]*matrixb[4])+(matrixa[8]*matrixb[7]))
  var Threethree = ((matrixa[6]*matrixb[2])+(matrixa[7]*matrixb[5])+(matrixa[8]*matrixb[8]))

  //Determinant
  var Rowone = (matrixa[0]*matrixa[4]*matrixa[8])
  var Rowtwo = (matrixa[1]*matrixa[5]*matrixa[6])
  var Rowthree = (matrixa[2]*matrixa[3]*matrixa[7])
  var NegRowone = (matrixa[1]*matrixa[3]*matrixa[8])
  var NegRowtwo = (matrixa[0]*matrixa[5]*matrixa[7])
  var NegRowthree = (matrixa[2]*matrixa[4]*matrixa[6])

  var Deter = ((Rowone+Rowtwo+Rowthree)-(NegRowone+NegRowtwo+NegRowthree))

  //Matrix of Minors Operation
  var Minoneone = ((matrixa[4]*matrixa[8])-(matrixa[7]*matrixa[5]))
  var Mintwoone = ((matrixa[3]*matrixa[8])-(matrixa[6]*matrixa[5]))
  var Minthreeone = ((matrixa[3]*matrixa[7])-(matrixa[6]*matrixa[4]))
  var Minonetwo = ((matrixa[1]*matrixa[8])-(matrixa[7]*matrixa[2]))
  var Mintwotwo = ((matrixa[0]*matrixa[8])-(matrixa[6]*matrixa[2]))
  var Minthreetwo = ((matrixa[0]*matrixa[7])-(matrixa[6]*matrixa[1]))
  var Minonethree = ((matrixa[1]*matrixa[5])-(matrixa[4]*matrixa[2]))
  var Mintwothree = ((matrixa[0]*matrixa[5])-(matrixa[3]*matrixa[2]))
  var Minthreethree = ((matrixa[0]*matrixa[4])-(matrixa[3]*matrixa[1]))

  //Flipping Matrix Signs Operation

  var finminoneone = (Minoneone*1)
  var finmintwoone = (Mintwoone*-1)
  var finminthreeone = (Minthreeone*1)
  var finminonetwo = (Minonetwo*-1)
  var finmintwotwo = (Mintwotwo*1)
  var finminthreetwo = (Minthreetwo*-1)
  var finminonethree = (Minonethree*1)
  var finmintwothree = (Mintwothree*-1)
  var finminthreethree = (Minthreethree*1)

  //Inverse Operation

  var Doneminoneone = (finminoneone/Deter)
  var Doneminonetwo = (finmintwoone/Deter)
  var Doneminonethree = (finminthreeone/Deter)
  var Donemintwoone = (finminonetwo/Deter)
  var Donemintwotwo = (finmintwotwo/Deter)
  var Donemintwothree = (finminthreetwo/Deter)
  var Doneminthreeone = (finminonethree/Deter)
  var Doneminthreetwo = (finmintwothree/Deter)
  var Doneminthreethree = (finminthreethree/Deter)



  //___________________________________________________________________________________________
  //Printer
  console.log("Matrix A:");
  console.log("");
  console.log(matrixa);
  console.log("");
  console.log("");
  console.log("Matrix B:");
  console.log("");
  console.log(matrixb);
  console.log("");
  console.log("A+B:");
  console.log("");
  console.log("");
  console.log("");
  console.log("AxB:");
  console.log("");
  console.log(Oneone);
  console.log(Onetwo);
  console.log(Onethree);
  console.log(Twoone);
  console.log(Twotwo);
  console.log(Twothree);
  console.log(Threeone);
  console.log(Threetwo);
  console.log(Threethree);
  console.log("");
  console.log("");
  console.log("Determinant:");
  console.log("");
  console.log(Deter);
  console.log("");
  console.log("");
  console.log("Inverse of Matrix:");
  console.log("");
  console.log(Doneminoneone);
  console.log(Donemintwoone);
  console.log(Doneminthreeone);
  console.log(Doneminonetwo);
  console.log(Donemintwotwo);
  console.log(Doneminthreetwo);
  console.log(Doneminonethree);
  console.log(Donemintwothree);
  console.log(Doneminthreethree);
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("calculateMatrixButton").addEventListener("click", calculate(), false)
});
