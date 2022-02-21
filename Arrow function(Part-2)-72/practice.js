

const students = [
    {
        id:101,
        name: 'Tutul Kabir',
        gpa:4.92
    },

    {
        id: 102,
        name: 'Anarul kabir',
        gpa : 3.52
    },

    {
        id:103,
        name: 'Touhid Alam',
        gpa : 3.92
    },

    {
        id:104,
        name: 'Ramiz Ali',
        gpa : 2.92
    }
];

/* function studentInfo(){
    return students.filter(function(x){
        return x.gpa>3.52;
    }).map(function(y){
        return y.name;
    })
}

console.log(studentInfo()); */

const studentInfo = ()=> students.filter((x)=>x.gpa>3.5).map((y)=>y.name);
console.log(studentInfo());