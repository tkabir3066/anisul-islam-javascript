// var playersInfo =  [["Tutul", 56],
//                    ["Rakib", 56],
//                    ["Atif", 96],
//                    ["Zoib", 38],
//                    ["Nick", 86]];

//                    for(var x=0; x<5; x++){

//                     for( var y=0; y<2; y++){
//                         console.log(playersInfo);
//                     }
//                    }bg

//Task-9

//Create a function called highestRunScorer that will
//. receive a 2d array called playersinfo
//. based on highest score, return the name of the player
//things required
//. variable
//. If-else
//. Loop
//. Function
//.Array

function highestRunScorer(playersInfo) {
  var highestScorer = playersInfo[0][0];
  var highestScore = playersInfo[0][1];
  for (var x = 1; x < playersInfo.length; x++) {
    if (highestScore < playersInfo[x][1]) {
        highestScore = playersInfo[x][1];
      highestScorer = playersInfo[x][0];
    }
   
  }
  return highestScorer;
}
var playersInfo = [
  ["Tutul", 165],
  ["Atif", 68],
  ["Mridul", 85],
  ["David", 63],
  ["Fahim", 545],
];

var names = highestRunScorer(playersInfo);
console.log(names);
