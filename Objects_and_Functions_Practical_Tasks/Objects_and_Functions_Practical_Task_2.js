//Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples


function totalAccepted(applesNumber, pearsNumber) {

    sum = applesNumber + pearsNumber
    return sum
}

let applesNumber = 15
let pearsNumber = 25

let totalAcceptedNumber = totalAccepted(applesNumber, pearsNumber)

console.log("The number of total accepted fruits is:", totalAcceptedNumber)