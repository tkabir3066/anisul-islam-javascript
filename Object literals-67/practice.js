 //object literal
 //short-hand of object property initializer
 function studentInfo1(name, age){
    return{
        name:name,
        age:age
    }

 }

 // in ES6 to avoid duplicate coding // ES6 helps us to illuminate duplicate codes
 console.log(studentInfo1("Tutul Kabir", 29));
  
  
 function studentInfo2(name,age){
     return{
         name,
         age
     }
 }
 console.log(studentInfo2("Anarul Ali", 25));

 // ES6 concise methods and non-concise methods in object literals

 // non-concise method

 let message ={
     body: function(){
         return "hi i am object function";
     }
 }

 console.log(message.body());


 let message2 = {
     body(){
         return "hello opbject function 2";
     }
 }
 console.log(message2.body());

 const message3 = {
     'body name'(){
         return "ami toami bhalo bashi";
     }
 }

 console.log(message2['body name']());