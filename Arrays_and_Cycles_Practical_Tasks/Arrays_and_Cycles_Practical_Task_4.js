//Convert numeric array to Boolean

let numericArray = [5, 7, -5, 0, 4, 0, 99]

let booleanArray = numericArray.map(value => Boolean(value))

console.log(booleanArray)