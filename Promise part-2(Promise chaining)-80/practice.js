
const taskOne =()=>{
    return new Promise((resolve, reject)=>{
        resolve("Task 1 is completed");
    })
}
const taskTwo =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve("Task 2 is completed"), 2000)
    })
}
const taskThree =()=>{
    return new Promise((resolve, reject)=>{
        resolve("Task 3 is completed");
    })
}
const taskFour =()=>{
    return new Promise((resolve, reject)=>{
        resolve("Task 4 is completed");
    })
}



taskOne().
then((res)=>console.log("task 1 is completed"))
.then(taskTwo)
.then((res)=>console.log(res))
.then(taskThree)
.then((res)=>console.log(res))
.then(taskFour)
.then((res)=>console.log(res))