
// Task 1

// Create a car object, add a color property to it with the value equals 'black'

    // - Change the color property of the car object to 'green'

    //- Add the power property to the car object, which is a function and displays the engine power to the console

let car = {

    color: "black",
    "engine power" : 850,

    power() {

        return console.log(car["engine power"])
    },
}

car.color = "green"

console.log(car.color)
console.log(car.power())