
//Traditional function

/* function display1(){
    console.log("I am display 1");
}

//Arrow function
const display2 = ()=> {
    console.log("I am display2");
}

display1();
display2(); */

//return with traditional function 
/* function message1(){
    return "hello world";
}
console.log(message1()); */


//return with arrow function

/* const message2 = ()=> "hello How are you?";  
console.log(message2()); */



//how to pass parameter in the traditional function

function add(num1, num2){
 return num1+num2;
}
const addNumber =add(20,10);
console.log(`Total= ${addNumber}`);


//how to pass parameter in the arrow function

const add2 = (num1, num2)=> num1+num2;
console.log(add2(15,35));

