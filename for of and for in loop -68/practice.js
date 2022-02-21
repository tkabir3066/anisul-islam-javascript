 
// const names = ["tutul", "Anarul", "ATif", "Ayan", "Mahira"];
// for(let name of names){
// console.log(name);
// }


//for in loop uses to iterate object

const student = {
    id:101,
    name: 'Tutul  Kabir',
    gpa : 3.95
}

for(let x in student){
   console.log(`${x}:${student[x]} `);
}