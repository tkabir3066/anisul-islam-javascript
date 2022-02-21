
/* let x=20, y=10;
let sum = x+y;
console.log(`Sum = ${sum}`); */


const name = "Tutul Kabir";
const occupation = "Web Developer";
const message = `Hello I am ${name}, I am a professional ${occupation}`;
console.log(message);


const name1 = "Atif Islam";
const job = "Engineer";
const message2 = `I am ${name}, I am a professional ${job}`;
console.log(message2);


const mango = 25;
const orange = 60;
const banana = 25;
const totalPrice = `${mango+orange+banana}`;
console.log(totalPrice);



/* function add(a,b){
    return a+b;
}

const total = add(50,30);
console.log(total); */


const add = (x,y)=> x+y;
const addNumbers = add(20,40);
console.log(addNumbers);

const sum = (m,n)=>{
    return m+n;
}
const totalSum = sum(50,50);
console.log(totalSum);



const mul = (a,b)=> a*b;
console.log(mul(5,6));


const div = (m,n)=> m/n;
console.log(div(50,5));


const square = num => num*num;
console.log(square(5));
console.log(square(6));
console.log(square(7));
console.log(square(9));



const mod =(a,b)=> a%b;
console.log(mod(55,5));



const expo = (a,b)=> a**b;
console.log(expo(5,3));