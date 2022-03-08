// js BOM
// popup boxes - alert, confirm, prompt


//  console.log(window)
// alert('error is here');

// confirm("Are you sure?");


// use of popUp boxes with confirm
// const deleteSomeThing = () =>{
//  let value =   confirm("Do you want delete?");
//  if(value){ 
//     console.log('deleted');
//  }
//  else {
//      console.log('not deleted')
//  }
// }

// deleteSomeThing()



// prompt   

//   function welcomeMessage(){

//     let h1 = document.createElement('h1');
//     let text;
//       var name = prompt("Enter your name: ");
//       if(name==null || name == ''){
//          text = 'no name found'
//       }
//       else{
//           text=name;
//       }

//      let textNode = document.createTextNode(text);
//      h1.appendChild(textNode);
//      document.body.appendChild(h1);
//   }
//   welcomeMessage();

  function welcomeMessage(){
    var name = prompt("Enter your name: ");
    const nameDiv = document.getElementById('name');
    const h1= document.createElement('h1');
    h1.innerText = name;
    nameDiv.appendChild(h1);
      if(name==null || name == ''){
         h1.innerText= 'no name found';
      }
      else{
          h1.innerText= `Welcome ${name}`;
      }

   
  }
  welcomeMessage();