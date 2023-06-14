// Implement a loop that prints odd numbers to the console

function printOddNumbers(number){
    for (let i = 1; i<= number;  i++){
        if(i % 2 != 0){

            console.log(i)

        }
    }
}

let num = 28

printOddNumbers(num)