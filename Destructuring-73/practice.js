
 const numbers = [10, 20, 30, 40, 50];


//  const [num1, num2, num3, num4, num5] = numbers;
//  console.log(num1);
//  console.log(num2);
//  console.log(num3);
//  console.log(num4);
//  console.log(num5);

// const [x,y,...z] = numbers;
// console.log(x);
// console.log(z);


//swap variables
// let a=10, b=20;
// [a,b] = [b,a];
// console.log(a)
// console.log(b)




//object destructure

  const student = {
       id:101,
       name:'Tutul',
       gpa:3.52

  }
/* 
  console.log(student.name);
  console.log(student.id);
  console.log(student.gpa); */

//   const {id, name, gpa} = student;
//   console.log(id)
//   console.log(name);
//   console.log(gpa);



//nested object destructure

const student2 = {
    id:101,
    name:'Tutul',
    gpa:3.52,
    languages: {
        native:'bangla',
        foreigner: 'Eng'
    }
}

const {id, name, gpa, languages} = student2;
// console.log(languages.native);


const studentInfo = ({id,name,gpa})=>{
    console.log(`${id}, ${name}, ${gpa}`);
}

const student3 = {
    id:101,
    name:'Tutul',
    gpa:3.52

}

studentInfo(student3);
