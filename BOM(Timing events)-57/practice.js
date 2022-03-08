

// setTimeout(()=>{
//     console.log('heeiooo');
// }, 3000);
// console.log("hi ki khobor");
// console.log('ki hei ki khobor');




// const display = ()=> console.log('display function');
// setTimeout(display, 2000);

// function display(){
//     console.log('display function');
// }


const saveButton = document.getElementById('btn');
const message = document.getElementById('msg');

saveButton.addEventListener('click', ()=>{
    message.textContent = 'User registration successful';
    setTimeout(()=>{
        message.textContent = '';
    },2000)
})



const startCount = ()=>{
   const msg2 = document.getElementById('msg2');
    let count = 1;
    msg2.textContent= count;
  const timeId= setInterval(() => {
        count++;
        msg2.textContent = count;
        if(count==11){
            clearInterval( timeId, msg2.textContent= '')
        }
    }, 1000);


}

// let seconds = 0;

// const timeId= setInterval(()=>{
//     seconds++;
//     console.log(seconds);
//     if(seconds==5){
//         clearInterval(timeId);
//     }
// },1000)

// console.log("third"); */