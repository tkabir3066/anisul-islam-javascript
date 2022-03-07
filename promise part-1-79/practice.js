
  const promise1 = new Promise((resolve, reject)=>{
 
    setTimeout(()=>{
        resolve('completed promise 1')
    }, 2000);


    
 });


 const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('completed promise 2')
    }, 1000);
 });


/*  promise1.then((res)=>{
     console.log(res);
 })

 promise1.catch((err)=>{
     console.log(err);
 })

 promise2.then((res)=>{
     console.log(res);
 }) */


 //onekgulo promise thakle aksathe run korte pari

 /* Promise.all([promise1, promise2])
 .then((res)=>{
    console.log(res);
 }) */

 //chaile destructue o korte partam

//  Promise.all([promise1, promise2])
//  .then(([res1, res2])=>{
//      console.log(res1, res2);
//  })



//race() function


Promise.race([promise1, promise2])
.then((res)=>{
    console.log(res);       //promise 2 aage resolve korbe karon promise 2 1s time niyeche
})