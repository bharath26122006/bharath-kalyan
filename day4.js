//array
//let number=[1,2,"three",true];
//let name=new Array("john","james");

//console.log(number[2]);
//console.log(names.length);
 
//let result=number.filter (number => number[0]);
//console.log(result);
//slice - delete the element based on index value
let number=[1,2,3,4,5];
number.splice(1,3,"hai");
console.log(number)
//object
let details={
    name:"js",
    totalmark:"90",
    //nestted obj
    subject:{
        dbms:"98",
        java:"99"
    },
    avg:function(){
        let sum=this.subject.dbms+this.subject.java;
        return sum;
    }
}
console.log(details.totalmark)
console.log(details["name"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.avg());

const person = {
    name: "bharath",
    age:21,
    city:"chennai"
};
const { name,age,city } = person;

console.log(name);
console.log(age);
console.log(city);