//object literals

//short-hand of object roperty initializer

// function studentInfo1(name,age){
//     return{
//         name:name,
//         age:age,

//     }
// }

// console.log("Rakibul Islam", 29);


// in ES6 to avoid duplicate coding // ES6 helps us to illuminate duplicate codes

// function studentInfo1(name, age){
//     return{
//          name,
//          age,
//     }
// }

// console.log("Rakibul Islam", 29);





// ES6 concise methods and non-concise methods in object literals


// non-concise method
/* let message = {
    body: function(){
        return `Hi I am object function`;
    }
}
console.log(message.body()); */



// with concise method

/* let message = {
    body(){
        return `Hi I am object function`;
    }
}
console.log(message.body());  */

// or

let message = {
    'body name'(){                              //function name must be in the single quotation
        return `Hi I am object function`;
    }
}
console.log(message['body name']()); 





