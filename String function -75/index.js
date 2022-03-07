 //String.startsWith();
//String.endsWith();
// String.includes();
// every string methods return true or false

//startsWith(searchString , position) -> check a string starts with another string

/* const message = "today is Friday";
 const start = message.startsWith("today");
 console.log(start); */



//endsWith(searchString , length) -> check a string ends with another string

const message1 = "today is Friday";
 const end = message1.endsWith("today");
//  console.log(end);
// includes(searchString , position) -> check if a string contains another string

const message2 = "today is Friday";
 const includes = message2.includes("today");
//  console.log(includes);
 
// all these methods are case sensitive



const nums = [1,2,3,5];
const incl = nums.includes(5);
// console.log(incl);


const pets = ["cat", "bat", "mew"];
console.log(pets.includes('cat'));