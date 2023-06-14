//1. Addition of various types (string + boolean, string + number, number + boolean)

//String + Boolean

let s = "someString"

resultSB = s + false
console.log("String + Boolean equals to:", resultSB)


//String + Number
let n = 8 
let s1 = "9"

resultSN1 = s + n
console.log("String + Number equals to:", resultSN1)

resultSN2 = s1 + n
console.log("String + Number equals to:", resultSN2)


// Number + Boolean
resultNB1 = n + false
console.log("Number + Boolean equals to:", resultNB1)

resultNB2 = n + true
console.log("Number + Boolean equals to:", resultNB2) 

// 2. Multiplication of various types (string * boolean, string * number, number * boolean)

// String * Boolean
resultMultiplication1 = s * false
console.log("String * Boolean equals to:", resultMultiplication1)


// String * Number
resultMultiplication3 = s * n
console.log("String * Number equals to:", resultMultiplication3)

resultMultiplication4 = s1 * n
console.log("String * Number equals to:", resultMultiplication4)

// Number * Boolean
resultMultiplication5 = n * true
console.log("Number * Boolean equals to:", resultMultiplication5)


// Dividing different types (string / boolean, string / number, number / Boolean)

// String / Boolean
resultDivision2 = s / false
console.log("String / Boolean equals to:", resultDivision2)

// String / Number
resultDivision3 = s / n
console.log("String / Number equals to:", resultDivision3)

resultDivision4 = s1 / n
console.log("String / Number equals to:", resultDivision4)


// Number / Boolean
resultDivision5 = n / true
console.log("Number / Boolean equals to:", resultDivision5)

resultDivision6 = n / false
console.log("Number / Boolean equals to:", resultDivision6)


// Performing explicit conversion (number, string, boolean)

resultExplicit1  = Number(s1) + Number(false)
console.log("String + Boolean explicitly converted to number equals to:", resultExplicit1)

resultExplicit2  = n + Number(s1)
console.log("Number + String explicitly converted to number equals to:", resultExplicit2)

resultExplicit3 = Number(true) / Number(s1)
console.log("Explicily converted: String / Boolean equals to:", resultExplicit3)

resultExplicit4 = n * Number(false)
console.log("Explicily converted: Number * Boolean equals to:", resultExplicit4)