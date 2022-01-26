// JS BOM
// JS Timing events methods
// setTimeOut(), setInterval( )

// setTimeout(()=>{
//     console.log("hello");
// }, 2000)

// setTimeout(display, 2000);

// function display(){
//     console.log("hello world");
// }



// const btn = document.querySelector(".btn");
// const msg = document.querySelector(".msg");

// btn.addEventListener("click", function(){

//     msg.textContent = "user registration is successful";
//     setTimeout(()=>{
//     msg.textContent = "";
//     }, 2000);
// });




const btn = document.querySelector(".btn");
const msg = document.querySelector(".msg");
 btn.addEventListener("click", startCount);
function startCount(){
      
    let count =1;
    msg.textContent = count;

    setInterval(()=>{
     count++;
     msg.textContent = count;
    }, 1000);
}