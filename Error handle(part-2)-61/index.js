// Error handling -> try, catch, throw
// The throw statement -> create custom errors


document.getElementById("check-button").addEventListener('click', ()=>{
   const num = document.getElementById('numTextField').value;
   
    try{
      if(num<5){
          throw "number is too low";
      }
      if(num>10){
          throw "number is too high";
      }
    }catch(err){
       console.log(err)
    }
})