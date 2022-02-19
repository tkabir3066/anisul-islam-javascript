 
//   const student = ["Rohit", "Rohan", "Sohan", "Zahid"];
//   for(let name of student){
//       console.log(name);
//   }


//for in uses in loop to iterate object

const student = {
    Id: 12,
    name : "Rohan Ali",
    age : 25,
    cgpa : 4.52
}

for(let x in student){

    // console.log(x);
    // console.log(student[x]);
    console.log(`${x}: ${student[x]}`);

}
