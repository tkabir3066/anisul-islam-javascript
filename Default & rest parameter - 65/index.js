
//default parameter

/* "use strict"
function message(text= 'hello this is a default parameter'){
    console.log(`${text}`);
}
message(); 
message("hello world"); */



// rest parameter

"use strict"

function printNumber(x,y,...z){                  //x, y are first two parameter and z is the rest parameter
 console.log(`x=${x}, y=${y}, z=${z}`);
}

printNumber(10,20,30,40,50);