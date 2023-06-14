//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

let str = '2 + 3 223 2223'

let result = str.match(/^2 \+ 3/)

console.log("Details of matching line as follows:", result);
console.log("2+3 line as follows:", result[0])