//Clipboard Event Object

// oncopy
//oncut
//onpaste



console.clear();

// const input = document.querySelector("input");


// input.addEventListener("copy", function(){
//    console.log("copied")
// });

// input.addEventListener("cut", function(){
//     console.log("cut")
//  });

//  input.addEventListener("paste", function(){
//     console.log("paste")
//  });


const input = document.querySelector("input");
 const para = document.querySelector("p");
 input.addEventListener("copy", function(){
    para.innerHTML ="Copied";
 });
 
 input.addEventListener("cut", function(){
     para.innerHTML= "cut";
  });
 
  input.addEventListener("paste", function(){
     para.innerHTML= "paste";
  });