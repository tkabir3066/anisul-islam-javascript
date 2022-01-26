// DOM events
//1. Event Object
// - Event type : change , submit, load, unload, open, play canplay, pause, playing, progress, ended, resize, scroll, toggle etc.
// - properties : type , target, preventDefault()

//2. MouseEvent Object
//3. KeyboardEvent Object
//4. FocusEvent Object
//5. ClipboardEvent Object
//6. DragEvent Object




//change event

//<input/> - text, number, password, email, color, radio, checkbox, search, time, date, datetime, week, month, url, tel, file,
// <select>,
//<textarea>

console.clear();
// var input= document.querySelector("input[name =name]")
// input.addEventListener("change", changeHandler);

// function changeHandler(e){
//      // console.log(e)
//     //  console.log(e.type);
//     // console.log(e.target);
//     // console.log(e.target.className);
//     // console.log(e.target.id);
//     console.log(e.target.value);
  
// }

/*
var programs= document.querySelectorAll("input[name=program]");
// console.log(programs);

Array.from(programs).map((program) => {
    program.addEventListener("change", programhandler)
}) 

function programhandler(e){
    if(e.target.checked){
        // console.log("checked");
        console.log(e.target.value);
    }
   
}

*/



/*
var department = document.querySelector("#department");
// console.log(department);

department.addEventListener("change", handleDepartment);

function handleDepartment(e){
//  console.log("selected")
console.log(e.target.value);
}

*/


