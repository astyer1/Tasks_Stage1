// Implement a loop that prints prime numbers to the console

function checkPrime(number){
    let s = 0 
    for(let i = 2; i < number; i++){
        if(number % i == 0){
            s++
        } 
    } 

    if(s>0){

        console.log(`${number}` + " " + "is not prime")
    } else {

        console.log(`${number}` + " " + "is prime")
    }
}

let num1 = 19
let num2 = 22

checkPrime(num1)
checkPrime(num2)
