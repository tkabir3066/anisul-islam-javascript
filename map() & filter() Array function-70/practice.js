
const numbers = [5, 7, 9, 12];
const squareNumbers = [];
numbers.forEach(x=>{
    squareNumbers.push(x*x);
})

// console.log(squareNumbers);

/* const numbers1= [2,4,8,13];
const squareNumbers1 = numbers1.map(x=>x*x);

console.log(squareNumbers1) */

const numbers2 = [5,8,12,6,14,25];
const newNumbers = numbers2.filter(x=>{
    return x>10;
})

console.log(newNumbers);
