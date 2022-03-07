
//Array destructure


/* let numbers = [10,20,30,40,50];
// let [num1, num2, num3, num4, num5] = numbers;
// console.log(num1);
// console.log(num2);
let [num1,num2,...z] = numbers ;
console.log(num1);
console.log(num2);
console.log(...z); */



//swap variables
/* 
let a=10, b=20;
[a,b] = [b,a];
console.log(a);
console.log(b); */



//object destructure

/* const studentInfo = {
    id : 101,
    fullName : "Tutul Kabir",
    gpa: 3.95
}
// console.log(studentInfo.id);
// console.log(studentInfo.fullName);
// console.log(studentInfo.gpa);


const {id, fullName, gpa} =studentInfo;
console.log(id);
console.log(fullName);
console.log(gpa); */



//Nested object destructure
/* 

const studentInfo = {
    id : 101,
    fullName : "Tutul Kabir",
    gpa: 3.95,
    languages : {
        native : "bangla",
        beginner : "english"
    }
}

const {id, fullName, gpa, languages} =studentInfo;

      console.log(languages.native);
      console.log(languages.beginner); 

                                           */


 

//destructuring function parameter with object
 
    /* const studentInfo= ({id,fullName})=>{
        console.log(`${id}, ${fullName}`);
    }

    const student = {
        id:101,
        fullName : "Tutul Kabir"
    }

    studentInfo(student); */


    



    

    

