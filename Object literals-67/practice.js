
/*  function studentInfo1(name , age){
     return {
         name :name, 
         age : age,
     }

 }
 console.log(studentInfo1("Tutul Kabir", 28)); */


//  function studentInfo1(name,age){
//     return{
//         name,
//         age,
//     }
//  }
//  console.log(studentInfo1("Anarul Kabir", 28));


let message = {
    body: function(){
        return `hi i am a web developer`;
    }
}

console.log(message.body());


let msg= {
    body(){
        return `hello world`;
    }
}
console.log(msg.body());


let msg2 = {
    'body name'(){
        return `hey! How are you`;
    }
}
console.log(msg2['body name']());