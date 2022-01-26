//Array methods
var names = ["Anis","Wasim","Navin", "Jabayer", "Tutul"];
console.log(names);

//shift opposite of pop

// names.shift();
// console.log(names);

//unshift opposite of push
// names.unshift("Tutul");
// console.log(names);

//splice method (er sahajje element add and remove kora jai)
// add method

// names.splice(2,0, "Jeba", "Bivan");
// console.log(names);

// names.splice(2, 1, "Jeba", "Bivan");
// console.log(names);

// //remove method
// names.splice(1,2);
// console.log(names);


//slice method

// var  newArray = names.slice(1,1);
// console.log(newArray);



//sorted method
//(Alphabetically)
// var sortedNames = names.sort();
// console.log(sortedNames);

//reverse
// var sortedNames = names.sort();
// names.reverse();
// console.log(sortedNames);



//number sorted
var numbers = [20,5,30,25,1];
numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers);

//reverse sorting
var numbers = [20,5,30,25,1];
numbers.sort(function(a,b){
    return b-a;
});
console.log(numbers);
