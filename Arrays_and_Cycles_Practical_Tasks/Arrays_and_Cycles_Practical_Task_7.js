//Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

function getIndex(arr, num){

    if(arr.includes(num)){

        return arr.indexOf(num)
    }

    return -1
}


// or 

function getIndexViaLoop(array, number){
    for(let i = 0; i < array.length; i++){
        if(array[i] == number){

            return i 
        }

    }

    return -1
}

let arrayOfnumbers = [5, 7, 15 , 20]
let numToFind = 15

console.log("The index found via getIndex method is:", getIndex(arrayOfnumbers, numToFind ))
console.log("The index found via getIndexViaLoop method is:", getIndexViaLoop(arrayOfnumbers, numToFind))