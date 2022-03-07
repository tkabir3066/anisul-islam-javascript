
const nums = [9,11,14,18,24];

const firstEvenNumber = nums.find(x=> x%2==0);
console.log(firstEvenNumber);

const firstEvenNumberIndex = nums.findIndex(x=> x%2==0);
console.log(firstEvenNumberIndex);


const students = [
    {id:101, gpa: 3.4},
    {id:101, gpa: 4.4},
    {id:101, gpa: 5.4},
    {id:101, gpa: 3.84}
]


const firstGreaterGpa = students.find(x=> x.gpa>4);
const firstGreaterGpaIndex = students.findIndex(x=> x.gpa>4);
console.log(firstGreaterGpa);
console.log(firstGreaterGpaIndex);