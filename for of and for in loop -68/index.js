
// for of loop

/* const names = ["Tutul", "Mitul", "Atif", "Zahid"];

for(let name of names){
    console.log(name);
} */



// for in loop
// for in uses to iterate object

let student = {
    Id : 101,
    name : "Tutul Kabir",
    cgpa : 3.92
}
for(let x in student){
    // console.log(x);
    // console.log(student[x]);
    console.log(`${x} : ${student[x]}`);
}