

// function sum(x,y,z){
//     return x+y+z;
// }
// let numbers = [1,2,3];
// let total = sum(numbers[0], numbers[1], numbers[2]);

// console.log(total);


// function sum(x,y,z){
//  return x+y+z;
// }
// let numbers = [1,2,3];
// let total = sum(...numbers);
// console.log(total);


let p1 = ["Tutul", "Atif", "Mridul"];
let p2 = ["Ayan","Mahira"];


// let total = p2.concat(p1);
let total = [...p1, ...p2];
console.log(total);