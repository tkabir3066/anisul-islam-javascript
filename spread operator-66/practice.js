
 const add = (x,y,z)=> x+y+z;

 const numbers1 = [1,2,3];
 console.log(add(...numbers1));

 const numbers2 = [4,5,6];
  
 const numbers = [...numbers1,...numbers2];
//  console.log(numbers);



///student details
  
      const student = {
          name: 'Tutul Kabir',
          age: 25,
          id:101
      }

     const details = {
          cgpa: 3.52,
          roll: 21546
      }

      const allDetails = {...student,...details};
      console.log(allDetails)


  





