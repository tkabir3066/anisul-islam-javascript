



function addNumbers(x,y,z){
return x+y+z;
}
const numbers = [10,20,30];
const sum = addNumbers(...numbers);
console.log(sum);


const numbers1 = [...numbers,40,50];
console.log(numbers1);
const numbers2 = [...numbers1,60,70];
console.log(numbers2);



//concatenate of two object with spread operator

var student = {
    id:101,
    name:"Tutul Kabir",
    gpa:3.92
}
var details = {
    school : "M.M College",
    Boad : "WBBSE"
}

var studentDetails = {...student,...details};
console.log(studentDetails);


