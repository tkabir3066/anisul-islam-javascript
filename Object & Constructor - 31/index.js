
//How to create an object
//How to print the value of an object
//adding a constructor 
//adding function inside a constructor




//constructor

function Student(name,age, cgpa,lang){
  this.name = name;
  this.age=age;
  this.cgpa = cgpa;
  this.lang= lang;
 
  this.display = function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  }
}

var student1 = new Student("Tutul", 28, 2.9, ["Bangla", "English", "Spanish"]);
var student2 = new Student("Sofia", 25, 2.5, ["Bangla", "French", "Spanish"]);
var student3 = new Student("Marie", 22, 3.5, ["Bangla", "English", "Portuguese"]);


student1.display();
student2.display();
student3.display();

