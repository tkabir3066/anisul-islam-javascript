
//  for loop

/* let numbers = [20, 45, 55,85];

for(let x=0; x<=numbers.length; x++){
    console.log(numbers[x]);
} */


//forEach

//with function name
/* var numbers = [27, 45, 55,85];

numbers.forEach(myFunction);

function myFunction(x){
 console.log(x);
} */

//with Anonymous function

// var numbers = [15, 17, 25, 35, 46];

// numbers.forEach(function(x){
//  console.log(x);
// })




//square the number with forEach function

/* var numbers = [2, 5,6, 9];
let squareNumbers = [];
numbers.forEach(function(num){
  squareNumbers.push(num*num);
})
console.log(squareNumbers); */


// add 5 with every number in array
/* var numbers =  [15, 20, 30, 40];

numbers.forEach(function(x, index, arr){          //parameter jekono name e dite pari
   arr[index] = x+5;
})

console.log(numbers);
 */


//   OR //

let numbers = [15, 20, 30, 40];
let addNumbers = [];
numbers.forEach(function(x){
    addNumbers.push(x+5);
})

console.log(addNumbers);





