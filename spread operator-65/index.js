
//sum

// function addNumbers(x,y,z){
//      return x+y+z;
// }

// const numbers = [1,2,3];
// const sum = addNumbers(numbers[0], numbers[1], numbers[2]);
// console.log(sum);



//sum with spread operator



/* function addNumbers(x,y,z){
    return x+y+z;
}

const numbers = [1,2,3];
const sum = addNumbers(...numbers);
// console.log(sum);

const numbers1 = [5,6,...numbers]; // same as push method// we can push with spread operator also
console.log(numbers1); */



//how to concatinate with spread operator

/* function addNumbers(x,y,z){
    return x+y+z;
}

const numbers1 = [1,2,3];
const numbers2 = [4,5,6];

// const numbers = numbers1.concat(numbers2); // previous method ES5

const numbers = [...numbers1,...numbers2];
console.log(numbers); */




//spread operator and object
//concanate of two object with spread Operator

let person = {
    name : "Tutul Kabir",
    age : 28,
    cgpa : 3.92,
}

let details = {
    country : "India",
    job : "Teacher",
}
 

let personDetails= {...person, ...details}
console.log(personDetails);




