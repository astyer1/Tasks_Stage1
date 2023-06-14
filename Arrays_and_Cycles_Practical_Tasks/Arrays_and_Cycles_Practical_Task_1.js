//Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

function movieTitle(arr){
    for(let title of arr) {
        
        console.log(title)
    }
}


let movies = ["Fight Club", "Pulp Fiction", "Revolver"]

movieTitle(movies)