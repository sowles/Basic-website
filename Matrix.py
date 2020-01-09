import operator
import time
#___________________________________________________________________________________________
#Matrix Bank
    #Determinant and Inverse will be taken of Matrixa
matrixa = [3,-1,0,2,0,-1,-2,4,1]
matrixb = [1,2,3,4,5,6,7,8,9]
#___________________________________________________________________________________________
#Equation Bank is legal and cool and cooler

AplusB = list(map(operator.add, matrixa,matrixb))

#Matrix Multiplier
Oneone = ((matrixa[0]*matrixb[0])+(matrixa[1]*matrixb[3])+(matrixa[2]*matrixb[6]))
Onetwo = ((matrixa[0]*matrixb[1])+(matrixa[1]*matrixb[4])+(matrixa[2]*matrixb[7]))
Onethree = ((matrixa[0]*matrixb[2])+(matrixa[1]*matrixb[5])+(matrixa[2]*matrixb[8]))
Twoone = ((matrixa[3]*matrixb[0])+(matrixa[4]*matrixb[3])+(matrixa[5]*matrixb[6]))
Twotwo = ((matrixa[3]*matrixb[1])+(matrixa[4]*matrixb[4])+(matrixa[5]*matrixb[7]))
Twothree = ((matrixa[3]*matrixb[2])+(matrixa[4]*matrixb[5])+(matrixa[5]*matrixb[8]))
Threeone = ((matrixa[6]*matrixb[0])+(matrixa[7]*matrixb[3])+(matrixa[8]*matrixb[6]))
Threetwo = ((matrixa[6]*matrixb[1])+(matrixa[7]*matrixb[4])+(matrixa[8]*matrixb[7]))
Threethree = ((matrixa[6]*matrixb[2])+(matrixa[7]*matrixb[5])+(matrixa[8]*matrixb[8]))

#Determinant
Rowone = (matrixa[0]*matrixa[4]*matrixa[8])
Rowtwo = (matrixa[1]*matrixa[5]*matrixa[6])
Rowthree = (matrixa[2]*matrixa[3]*matrixa[7])
NegRowone = (matrixa[1]*matrixa[3]*matrixa[8])
NegRowtwo = (matrixa[0]*matrixa[5]*matrixa[7])
NegRowthree = (matrixa[2]*matrixa[4]*matrixa[6])

Deter = ((Rowone+Rowtwo+Rowthree)-(NegRowone+NegRowtwo+NegRowthree))

#Matrix of Minors Operation
Minoneone = ((matrixa[4]*matrixa[8])-(matrixa[7]*matrixa[5]))
Mintwoone = ((matrixa[3]*matrixa[8])-(matrixa[6]*matrixa[5]))
Minthreeone = ((matrixa[3]*matrixa[7])-(matrixa[6]*matrixa[4]))
Minonetwo = ((matrixa[1]*matrixa[8])-(matrixa[7]*matrixa[2]))
Mintwotwo = ((matrixa[0]*matrixa[8])-(matrixa[6]*matrixa[2]))
Minthreetwo = ((matrixa[0]*matrixa[7])-(matrixa[6]*matrixa[1]))
Minonethree = ((matrixa[1]*matrixa[5])-(matrixa[4]*matrixa[2]))
Mintwothree = ((matrixa[0]*matrixa[5])-(matrixa[3]*matrixa[2]))
Minthreethree = ((matrixa[0]*matrixa[4])-(matrixa[3]*matrixa[1]))

#Flipping Matrix Signs Operation

finminoneone = (Minoneone*1)
finmintwoone = (Mintwoone*-1)
finminthreeone = (Minthreeone*1)
finminonetwo = (Minonetwo*-1)
finmintwotwo = (Mintwotwo*1)
finminthreetwo = (Minthreetwo*-1)
finminonethree = (Minonethree*1)
finmintwothree = (Mintwothree*-1)
finminthreethree = (Minthreethree*1)

#Inverse Operation

Doneminoneone = (finminoneone/Deter)
Doneminonetwo = (finmintwoone/Deter)
Doneminonethree = (finminthreeone/Deter)
Donemintwoone = (finminonetwo/Deter)
Donemintwotwo = (finmintwotwo/Deter)
Donemintwothree = (finminthreetwo/Deter)
Doneminthreeone = (finminonethree/Deter)
Doneminthreetwo = (finmintwothree/Deter)
Doneminthreethree = (finminthreethree/Deter)

input("Compatable! Press Enter")

#___________________________________________________________________________________________
#Printer
print ("Starting...")
time.sleep(1)

print ("Matrix A:")
print ("")
print (matrixa)
print ("")
print ("")
print ("Matrix B:")
print ("")
print (matrixb)
print ("")
print ("____________________________________________________")
print("A+B:")
print("")
print(AplusB)
print("")
print ("____________________________________________________")
print("")
print("AxB:")
print("")
print (Oneone)
print (Onetwo)
print (Onethree)
print (Twoone)
print (Twotwo)
print (Twothree)
print (Threeone)
print (Threetwo)
print (Threethree)
print ("")
print ("____________________________________________________")
print ("")
print ("Determinant:")
print ("")
print (Deter)
print ("")
print ("____________________________________________________")
print ("")
print ("Inverse of Matrix:")
print ("")
print (Doneminoneone)
print (Donemintwoone)
print (Doneminthreeone)
print (Doneminonetwo)
print (Donemintwotwo)
print (Doneminthreetwo)
print (Doneminonethree)
print (Donemintwothree)
print (Doneminthreethree)
