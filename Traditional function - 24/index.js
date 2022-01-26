//Creating a function
function square(num)
{
    var result = num * num;
    document.write("Result = " + result + "<br><br>")
}
 
//Multiply function

function multiply(num1,num2){
    var result = num1 * num2;
    document.write("Multiply = " + result+ "<br>")
}

//usage of return keyword

function mul(num1,num2){
    var result = num1 * num2;
   return result;
}

var x = mul(5,6);
document.write("Return = "+ x + "<br>");

//addition function
function addition(num1,num2){
    var result = num1 + num2;
    document.write("Addition = " + result + "<br>");
}

//substraction function
function sub(num1,num2){
    var result = num1 - num2;
    document.write("Substraction = " + result + "<br>");
}

//Modulus function
function mod(num1,num2){
    var result = num1%num2;
    document.write("Modulus = " + result + "<br>")
}


//calling a function
square(5);
square(6);
square(7);
square(8);
multiply(5,6);
addition(20,20);
sub(15,10);
mod(300,60);