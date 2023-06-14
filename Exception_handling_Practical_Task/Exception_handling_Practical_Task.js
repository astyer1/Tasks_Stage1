//In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. 
//When running 1/0, the error 'cannot be divided by zero'


function tryCatch(){
   try{
    console.log (a);
    let a = 3
   } catch(err) {

    console.log("Error: ‘let must be declared’ before use");

   }
}




function divByZero(numerator, denominator){
    try{

        if(denominator == 0){
            throw new Error("cannot be divided by zero")
        }

        console.log("The division result is:", numerator/denominator)

    } catch(err) {

        console.log("Error:", err.message)
    }
}

tryCatch()
divByZero(5,0)
divByZero(5,5)