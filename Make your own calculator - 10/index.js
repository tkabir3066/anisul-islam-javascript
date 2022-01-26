// var num1 = 20;
// var num2 = 10;

// var sum, sub ;
// sum = num1 + num2;
// document.write("Addition =" + sum + "<br>");

// sub = num1 - num2;
// document.write("Subtraction =" +sub);



var num1 = prompt("Enter First Number : ");
var num2 = prompt("Enter Second Number : ");
num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

// var sum, sub, mul, div, mod;
// sum = num1 + num2;
// sub = num1 - num2;
// mul = num1*num2;
// div = num1/num2;
// mod = num1%num2;


// document.write("Addition = " + sum + "<br>");
// document.write("Subtraction = " + sub + "<br>");
// document.write("Multiplication = " + mul + "<br>");
// document.write("Division = " + div + "<br>" );
// document.write("Modulus = " + mod );

// document.write(num1 + " + " + num2 + " = " + sum + "<br>");
// document.write(num1 + " - " + num2 + " = " + sub + "<br>");
// document.write(num1 + " * " + num2 + " = " + mul + "<br>");
// document.write(num1 + "/" + num2 + " = " + div + "<br>");
// document.write(num1 + " % " + num2 + " = " + mod + "<br>");



var result;
result = num1 + num2;
document.write(num1 + " + " + num2 + " = " + result + "<br>");

result = num1 - num2;
document.write(num1 + " - " + num2 + " = " + result + "<br>");
result = num1*num2;
document.write(num1 + " * " + num2 + " = " + result + "<br>");
result = num1/num2;
document.write(num1 + "/" + num2 + " = " + result + "<br>");
result = num1%num2;
document.write(num1 + " % " + num2 + " = " + result + "<br>");