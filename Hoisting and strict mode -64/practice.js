
//  hoisting
//hoisting is default behaviour of javascript
//it works with var keyword only but does not with let , const 

/* x=20;
console.log(x);    
var x;  */           


/* x=20;
if(true){
   y=10;
   console.log(`y= ${y}`)
   var y;
}
console.log(`x = ${x}`);
var x;
 */




/* 'use strict'
x=20;
console.log(x); // output =20;
var x; */


'use strict'
x= 10;
console.log(x)/// Uncaught ReferenceError: assignment to undeclared variable x