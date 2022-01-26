//load, unload
// scroll
//resize
//toggle - details



// window.addEventListener("load", function(){
//    console.log("load");
// });

// window.addEventListener("unload", function(){
//     console.log("unload");
//  });


// window.addEventListener("scroll", function(){
//     console.log("scroll");
// });


// window.addEventListener("resize", function(){
//     // console.log("resize");
//     const height = window.outerHeight;
//     const width = window.outerWidth;
//     console.log(`height: ${height}, width: ${width}`)
//  });


const details = document.querySelector("details");


details.addEventListener("toggle", function(e){
//    console.log("toggle");
  console.log(e.target.open);
});