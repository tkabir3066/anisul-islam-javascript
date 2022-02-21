
//for loop
/* 
const numbers = [25,30,45,55,60];
for(let i=0; i<numbers.length; i++){
 console.log(numbers[i]);
} */



//forEach function with function name

// const numbers = [25,30,45,55,60,70,80];
// numbers.forEach(myFunction);
// function myFunction(x){
//     console.log(x);
// }


//forEach with anonymous function

/* const numbers = [17,21,35,39,53];
numbers.forEach(function(x){
 console.log(x);
}) */


// square the numbers with forEach function

        //  const numbers = [5,7,9,11];
        //  let squareNumbers = [];
        //  numbers.forEach(function(num){
        //    squareNumbers.push(num*num);
        //  })

        //  console.log(squareNumbers);



/* 
        const numbers = [11,22,15,25];
        const square = [];
        numbers.forEach(function(x){
            square.push(x*x);
        })

        console.log(square); */



        // const numbers =[12,13,14,15,16];
        // const square = [];
        // numbers.forEach(function(m){
        //     square.push(m*m);
        // })

        // console.log(square);


// add 5 with every number in array

const numbers = [12,13,14,15];
numbers.forEach(function(x,index,arr){
    arr[index] = x+5;
})

console.log(numbers);




const allNumbers = [10,20,30,35];
const add = [];
allNumbers.forEach(function(x){
add.push(x+5);
})


console.log(add);
