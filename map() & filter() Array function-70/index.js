  //with forEach function

 /* let numbers = [5, 7, 9, 11];
 let squareNumbers = [];

 numbers.forEach(function(x){
   squareNumbers.push(x*x);
 })

 console.log(squareNumbers); */


 // with map function
/*  let numbers = [2, 4, 5, 9];
 let squareNumbers = numbers.map(function(x){           // map function retun a new array
     return x*x;
 })

 console.log(squareNumbers); */


 
//  filter

let numbers = [15, 25, 4, 12, 9, 23];
 let newNumbers = numbers.filter(function(x){
     return x>10;
 })

 console.log(newNumbers);