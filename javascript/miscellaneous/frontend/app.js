// const stu1 = {
//     name : "shivam ",
//     marks : 96,
//     age : 21,
//     getMarks :function (){
//          return this.marks;
//     }
// }
// const stu2 = {
//     name : "anuj ",
//     marks : 96,
//     age : 21,
//     getMarks :function (){
//          return this.marks;
//     }
// }
// const stu3 = {
//     name : "gyan ",
//     marks : 96,
//     age : 21,
//     getMarks :function (){
//          return this.marks;
//     }
// }    to reduce to this class make stu then obj of this stu1 stu2 stu3

     

// function PersonMaker(name,age){    //factory function ....
//     const person = {
//         name: name ,
//         age : age ,
//         talk(){
//             console.log(`Hi ! my name is ${this.name}`);
//         }
//     };
//     return person;
// }
// let p1= PersonMaker("golu",21);
// let p2 =PersonMaker("shivam",22); // make different copies for p1 and p2



//constructor .... doesnt return anything start with captial letter 
// function Person(name,age){     
//     this.name= name;
//     this.age = age;
//     // console.log(this);      her this is given window object this basically give parent 
// }
// Person.prototype.talk =function(){    // make prototype p1 and p2 instance follow this property mdn me new ja kar pad lena h 4 step process hota h first make new blank javascript on=bject 
//     console.log(`Hi! my name is ${this.name}`);
// }

// let p1 = new Person("Golu",21);
// let p2 = new Person("shivam",23);
// not make different copy for p1 and p2 p1.talk===p2.talk true no make copy 





//classes in js 

// class Person{
// constructor(name,age){     
//     this.name= name;
//     this.age = age;
// }
// talk(){   
//     console.log(`Hi! my name is ${this.name}`);
// }
// }

// let p1 = new Person("Golu",21);
// let p2 = new Person("shivam",23);




// INHERITANCE LET MAKE A TWO CLASSES



class Person {
    constructor(name ,age ){
        this.name = name ;
        this.age = age;
    }
        talk() {
            console.log(`Hi! my name is ${this.name}`);
        }
    }
class Student extends Person {
  constructor(name,age,marks){
    super(name,age);   //perent class constructor being called 
    this.marks= marks;
  }
}

// let stu1 = new Student("golu",21,93);


class Teacher extends Person {
    constructor(name,age,subject){
        super(name,age);
    this.subject= subject;
    }
  }
