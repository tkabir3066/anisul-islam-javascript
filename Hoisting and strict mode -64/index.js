
// hoisting
//hoisting is default behaviour of javascript
/* x=20;
console.log(x);   // it works with var keyword only but does not work with const,let
var x;
 */


/* x=20;
if(true){
    y=10;
    console.log(`y= ${y}`);
    var y;  //var keyword end e declare korleo hoisting er jonno prothom  e niye jabe
}
console.log(`x= ${x}`);
var x; */



// strict mode 

/* x=20;
console.log(x); //output 20 */


"use strict"  //strict mode active korte "use strict" ei string ta use korte hobe
 x=20;    // strict mode e variable declare na kore use kora jabe na tai output error dekhabe
 console.log(x);



