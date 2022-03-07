//callback & higher order function
/*  
function square(x){
  console.log(`square of ${x} : ${x*x}`);
}

// square(5);

// const y =square;
// y(6);

function higherOrderFunction(num, callback){
  callback(num);
}

higherOrderFunction(6, square) */




//callback function

 /* const taskOne = (callback)=> {
    console.log("task1");
    callback();
}


const taskTwo = (callback)=> {
    setTimeout(()=> {
        console.log("task2. Data Loading");
        callback();
    }, 2000); 
    
}
const taskThree = (callback)=> {
    console.log("task3");
    callback();
}
const taskFour = (callback)=> {
    console.log("task4");
    callback();
}
const taskFive = ()=> {
    console.log("task5");
}


taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour(()=>{
                taskFive();
            });
        });
    });
}); */


