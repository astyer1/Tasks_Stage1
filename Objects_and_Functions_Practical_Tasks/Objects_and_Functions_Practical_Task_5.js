// Write a function that determines whether a number is prime or not

function check_for_prime(number){
    let s = 0;
    if(number <1){
        console.log("In order to check if the number is prime or not it should be >= 1")
        return
    }


    for(let i = 1; i <= number; i++){
        if(number % i == 0){
            s = s+1
        }    
    }

    if(s > 2){
        console.log("The number is not prime:", `${number}`);
    } else {
        console.log("The number is  prime:", `${number}`)
    }
    
}


check_for_prime(-1)
check_for_prime(19)
check_for_prime(28)
check_for_prime(11)