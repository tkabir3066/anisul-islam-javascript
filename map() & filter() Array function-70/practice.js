

//square with forEach function 

/* const numbers = [5,7,9,11];
let squareNumbers = [];
numbers.forEach(function(x){
    squareNumbers.push(x*x);
})

console.log(squareNumbers); */



//square with forEach function

/* const nums = [2,3,7,9];
const squareNums = nums.map(function(x){
       return x*x;
})

console.log(squareNums); */


/* const numbers = [4,8,12,16];
const square = numbers.map(function(m){
    return m*m;
})


console.log(square); */


/* const nums1 = [15,25,30,40];
const squares1 = nums1.map(function(a){
    return a*a;
})
console.log(squares1); */


const numbers2 = [15,7,9,12,11,5];
const newNumbers = numbers2.filter(function(x){
     return x>10;
})

console.log(newNumbers);