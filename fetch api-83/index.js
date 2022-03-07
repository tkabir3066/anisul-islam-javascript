// 4 ways to call api- XMLHttpRequest, fetch, axios, jquery

//fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async await


// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() return a promise
// - returned promise can only handle network error
// - does not support  all the older browser



console.clear();


//GET method(by default)
/* fetch('https://jsonplaceholder.typicode.com/posts/101')
.then((res)=>{
  
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    return res.json();
} )
.then(res=> console.log(res))
.catch((err)=>console.log(err)); */



//POST method 

/* fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
     body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
     }),

     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
})
.then((res)=>{
  
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    return res.json();
} )
.then(res=> console.log(res))
.catch((err)=>console.log(err)); */



//PUT method(update method)
/* 
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
     body: JSON.stringify({
        id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
     }),

     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
})
.then((res)=>{
  
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    return res.json();
} )
.then(res=> console.log(res))
.catch((err)=>console.log(err)); */


// PATCH method (single data update)

  /* 
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
     body: JSON.stringify({
      
      title: 'ki re bhai',
     
     }),

     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
})
.then((res)=>{
  
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    return res.json();
} )
.then(res=> console.log(res))
.catch((err)=>console.log(err)); */



// DELETE method 

/* fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})

.then((res)=>{
  
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    return res.json();
} )
.then(res=> console.log(res))
.catch((err)=>console.log(err)); */



// assync await with fetch


const makeRequest = async (url) =>{
    const res = await fetch(url);
    if(!res.ok){
     const message = `Error : ${res.status}`;
     throw new Error(message);
    }
    const data = await res.json(); 
    return data;
}

// const getData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=> console.log(res))
//     .catch((err)=> console.log(err))
// }

// getData(); 

const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))
}

sendData(); 