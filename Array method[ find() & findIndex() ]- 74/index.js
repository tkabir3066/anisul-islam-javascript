
// find(callback, value) return the value of the first element that pass certain condition
// if the condition is not matched then return -1

let numbers = [5,9,16,21,46,75];
let firstEvenNumber = numbers.find(x=>x%2==0);
let firstEvenNumberIndex = numbers.findIndex(x=>x%2==0);
console.log(firstEvenNumber);
console.log(firstEvenNumberIndex);

// findIndex(callback, value) return the index of the first element that pass certain condition



const students = [
    {id:101, gpa:3.5},
    {id:102, gpa:4.5},
    {id:103, gpa:2.5},
    {id:104, gpa:5.5}
]

const firstGreaterGpa = students.find(x=>x.gpa>4);
const firstGreaterGpaIndex = students.findIndex(x=>x.gpa>4);
console.log(firstGreaterGpa);
console.log(firstGreaterGpaIndex);