// printing one dimentional(1D) Array using for loop
// var names = ["Tutul", "Atif", "Fahim", "Nabin","Kazi"];
// for(var i=0; i<5;i++){
//     console.log(names[i]);
// } 



//Task-8

// Create a function called highestScore that will 
// receive a 1d array called scores
//return the highest score


    //Things required
    //.Variable
    //.If-else
    //.Loop
    //.Function
    //.Array


    function highestScore(scores){
        
      var  max = scores[0];
      for( var x=1; x<scores.length; x++){
          if(max<scores[x]){
              max = scores[x];
          }
      }
        return max;
    }
       
    var scores = [35,154,25,89,98];
    var maxScore =   highestScore(scores);
    console.log(maxScore);