// KeyboardEvent Object
// 1. Keydown - pressing a key, can repeat 
// 2. keypress ( may not supported by some browsers)

// 3. keyup
// some properties - key, keyCode, code, shiftKey, ctlkey, repeat


console.clear();
const textArea = document.querySelector("textarea");

textArea.addEventListener("keydown", function(e){
    // console.log("keydown");
    if(e.repeat){
        alert("do not repeat ");
    }
});



// textArea.addEventListener("keypress", function(){
//     console.log("keypress");
// });


// textArea.addEventListener("keyup", function(e){
//     // console.log("keyup");
//     // console.log(e.key);
//     // console.log(e.keyCode);
//     // console.log(e.code);
//     // console.log(e.shiftKey);
//     // if(e.shiftKey){
//     //     console.log("shift+" + e.key);
//     // }
// });