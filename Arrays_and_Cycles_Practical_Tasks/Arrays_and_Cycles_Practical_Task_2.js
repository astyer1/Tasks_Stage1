//Given an array of car manufacturers, convert the array to a string and back to an array

let manufacturer = ["Volvo", "BMW", "Fiat"]

newList = String(manufacturer)

console.log(newList)

backToArray = newList.split(",")

console.log(backToArray)