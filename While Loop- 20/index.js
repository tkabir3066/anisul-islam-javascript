// for(var i =1; i <=100; i = i+1)
// {
//     document.write(" " + i);
// }

// var sum = 0; 
// for(var i =1; i <=100; i = i+1)
//  {
//     sum = sum + i;
//  }
//  document.write(sum);





// var i = 1;
// var sum = 0;
// while(i <= 100)
// {
  
//     sum = sum + i;
//     i = i + 1;
// }
// document.write(sum);




// Write a program that will print sum of all the number divisible by 3 and 5 from 1 to 100.

var i =1;
var sum =0;


while(i<=100)
{
    if(i%3==0 && i%5==0)
    {
        sum = sum + i;
    }
    i = i+1;
  
}
document.write(sum);