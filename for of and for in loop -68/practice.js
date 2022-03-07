

// const names = ['Anarul', 'Tutul', 'Atif', 'Mridul', 'Ayan', 'Soyab'];

// for(const name of names){
//     console.log(name);
// }



const student = {
    id:101,
    name: 'Tutul',
    cgpa: 4.52
}

for(const x in student){
    console.log(`${x}: ${student[x]}`);
}