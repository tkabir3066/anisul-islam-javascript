 const students1 = 
     [
         {id:101, name:'Tutul', gpa:3.52},
         {id:102, name:'Mitul', gpa:4.52},
         {id:103, name:'Jahtul', gpa:2.85},
         {id:104, name:'Satul', gpa:2.52},
     ];


     //with traditonal function

//     function studentInfo(){
//      return students1.filter(function(x){
//           return x.gpa>3;
//       }).map(function(y){
//           return y.name;
//       })
//     }
//   console.log(studentInfo())
 


   //with arrow function
      const studentInfo = ()=> students1.filter(x=>x.gpa>4).map(y=>y.name);
      console.log(studentInfo())

 