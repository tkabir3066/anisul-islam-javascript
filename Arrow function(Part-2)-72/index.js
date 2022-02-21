//with traditional function
 /* const students = [
     {
         id : 101,
         name : "Anisul Islam",
         gpa : 5.52
     },

     {
         id : 101,
         name : "Tutul Islam",
         gpa : 2.82
     },

     {
         id : 101,
         name : "Atif ali",
         gpa : 4.52
     },

     {
         id : 101,
         name : "Soyab Aktar",
         gpa : 2.52
     }
 ];


 function studentsName1(){
     return students.filter(function(x){
        return x.gpa > 3;
     }).map(function(y){
         return y.name;
     });
 }

 console.log(studentsName1()); */





 //with arrow function
 /*  const students = [
    {
        id : 101,
        name : "Anisul Islam",
        gpa : 5.52
    },

    {
        id : 101,
        name : "Tutul Islam",
        gpa : 2.82
    },

    {
        id : 101,
        name : "Atif ali",
        gpa : 4.52
    },

    {
        id : 101,
        name : "Soyab Aktar",
        gpa : 2.52
    }
];
 const studentsName2 = ()=>{
   return students.filter(function(a){
       return a.gpa>3;
   }).map(function(b){
       return b.name;
   })
 }

 console.log(studentsName2()); */


 // Easy method of arrow function

 const students = [
    {
        id : 101,
        name : "Anisul Islam",
        gpa : 5.52
    },

    {
        id : 101,
        name : "Tutul Islam",
        gpa : 2.82
    },

    {
        id : 101,
        name : "Atif ali",
        gpa : 4.52
    },

    {
        id : 101,
        name : "Soyab Aktar",
        gpa : 2.52
    }
];

const studentsName3 = ()=> students.filter((x)=>x.gpa>3).map((y)=>y.name);
console.log(studentsName3());