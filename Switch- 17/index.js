// digit spelling
// 0-Zero, 1 - One,.......9-nine, 10- Not a valid digit

/*
var digit = prompt("Enter any digit :");

if (digit == 0) console.log("Zero");
else if (digit == 1) console.log("One");
else if (digit == 2) console.log("Two");
else if (digit == 3) console.log("Three");
else if (digit == 4) console.log("Four");
else if (digit == 5) console.log("Five");
else if (digit == 6) console.log("Six");
else if (digit == 7) console.log("Seven");
else if (digit == 8) console.log("Eight");
else if (digit == 9) console.log("Nine");
else console.log("Not a digit");
                                   */

// switch, case, break, default

/*
var digit = prompt("Enter any digit : ");
switch (digit) {
  case "0":
    console.log("Zero");
    break;
  case "1":
    console.log("One");
    break;
  case "2":
    console.log("Two");
    break;
  case "3":
    console.log("Three");
    break;
  case "4":
    console.log("Four");
    break;
  case "5":
    console.log("Five");
    break;
  case "6":
    console.log("Six");
    break;
  case "7":
    console.log("Seven");
    break;
  case "8":
    console.log("Eight");
    break;
  case "9":
    console.log("Nine");
    break;
  case "10":
    console.log("Ten");
    break;
  default:
    console.log("Not a digit");
}
     */



// input a letter and check it is vowel or consonant using switch

var letter = prompt("Enter a letter :");
letter = letter.toLowerCase();
// switch(letter){
//     case "a" :
//     console.log("vowel");
//     break;
//     case "e" :
//     console.log("vowel");
//     break;
//     case "i" :
//     console.log("vowel");
//     break;
//     case "o" :
//     console.log("vowel");
//     break;
//     case "u" :
//     console.log("vowel");
//     break;
//     default:
//         console.log("Consonant")
// }

switch(letter){
    case "a" :
    case "e" :
    case "i" :
    case "o" :
    case "u" :
        console.log("vowel");
        break;
    default:
        console.log("Consonant")
}