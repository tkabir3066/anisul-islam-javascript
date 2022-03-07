//How to create a promise?
//How to use a promise?
//How to run multiple promise- all()
// race()
//Promise chaining





// 1.How to create promise- pending, resolve, rejected
const promise1 = new Promise((resolve, reject)=>{
   let completedPromise = true;     // false hoi tahole catch call hobe 
   if(completedPromise){
       resolve("completed promise 1");
   }
   else{
       reject("not completed promise 1")
   }
});

//How to use a promise?

promise1.then((res)=>{                //promise jokhon resolve hobe tokhon .then() function call hobe
console.log(res);                       
}) ;

promise1.catch((err)=>{
    console.log(err);
})