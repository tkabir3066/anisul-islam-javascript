
 function myMessage(a, text ='Hello world'){
  console.log(`${a}, ${text}`)
 }

 myMessage(7);
 myMessage(7,"ami tomai bhalobashi");




 //rest parameter

 function printNumber(x,y,...z){
  // console.log(x,y,...z);
  console.log(` x=${x}
 y=${y}
 z=${z}`);
 }

 printNumber(10,20,30,60,40);