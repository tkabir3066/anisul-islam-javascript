var myVar = document.querySelector("h1");
myVar.addEventListener("mouseover", function(){
   myVar.classList.add("tutul");
})

myVar.addEventListener("mouseout", function(){
    myVar.classList.remove("tutul");
 })