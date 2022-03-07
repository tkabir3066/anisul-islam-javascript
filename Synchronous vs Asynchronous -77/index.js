//1.Synchronous vs Asynchronous
//2. Callback, higher-order function
//3. Promise
//4. Async await

// javascript is a by default synchronous
// javascript has a blocking code behaviour


//synchronous programming


const task1= ()=>{
    console.log("task1");
}

// const dataloading = ()=>{
//     console.log("task2. data loading");
// }
const task2= ()=>{
    setTimeout(()=>{
        console.log("task2. data loading");
    }, 2000)
}
const task3= ()=>{
    console.log("task3");
}
const task4= ()=>{
    console.log("task4");
}
const task5= ()=>{
    console.log("task5");
}



task1();
task2();
task3();
task4();
task5();