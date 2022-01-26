
//je html tag gulor sathe mouse event kaj kore na ---- <html>, <head>, <meta>, <title>, <br>, <style>, <iframe>, <param>, <base>, <bdo>



// Mouse event

//1. onclick
//2. ondblclick
//3. onmousedown
//4. onmouseup

//5. onmouseenter
//6. onmouseleave
//7. onmousemove
//8. onmouseover





       console.clear();

       const div = document.querySelector("div");

    //    div.addEventListener("click" , function(){
    //        console.log("clicked");
    //    });

    // div.addEventListener("click" , function(e){
    //     // console.log(e);
    //     // console.log(e.target);
    //     // console.log(e.target.id);
    //     // console.log(e.target.className);
    //     // console.log(e.target.innerHTML);
    //     console.log(e.target.innerText);
    //     // console.log(e.target.textContent);
    // });






    //    div.addEventListener("dblclick" , function(){
    //     console.log("dbl clicked");
    // });
         
    // div.addEventListener("mousedown" , function(){
    //     console.log("mouse down");
    // });

    // div.addEventListener("mouseup" , function(){
    //     console.log("mouse up");
    // });

    // div.addEventListener("mouseenter" , function(){
    //     console.log("mouse enter");
    // });

    // div.addEventListener("mouseleave" , function(){
    //     console.log("mouse leave");
    // });


    // div.addEventListener("mouseover" , function(){
    //     console.log("mouse over");
    // });



    // div.addEventListener("mousemove" , function(){
    //     console.log("mouse move");
    // });
    // div.addEventListener("mousemove" , function(e){
    //     console.log("clientX = " + e.clientX + ", clientY = "+ e.clientY);
    // });

    // div.addEventListener("mousemove" , function(e){
    //     console.log("offsetX = "+ e.offsetX + ", offsetY = " + e.offsetY);
    // });





    const buttons = document.querySelectorAll(".btn");
    
    Array.from(buttons).map((button) =>{
        button.addEventListener("click", function(e){
            console.log(e.target.innerText);
        })
    })




