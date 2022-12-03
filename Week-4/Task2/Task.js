var Person = function() {};
Person.prototype.initialize=function(name,age)
{
    this.name=name;
    this.age=age;
    console.log(name, age);
}// TODO: create the class Teacher and a method teach
class Teacher extends Person{
      teach(params) {
       console.log(params);    
    }


}
Person.setPrototypeOf(Teacher)
// Teacher.__proto__=Person
var him=new Teacher();
him.initialize("Adam",45); // try to find in Person not fond then check in teacher
him.teach("Inheritance");





// var Person = function() {};
// Person.prototype.initialize=function(name,age)
// {
//     this.name=name;
//     this.age=age;
//     console.log(name, age);
// }// TODO: create the class Teacher and a method teach
// function Teacher() {
      
// }
// //If we comment this line we get error 
// //child,Parent)
// Object.setPrototypeOf(Teacher.prototype,Person.prototype)
// Teacher.prototype.teach=function(params) {
//     console.log(params);    
//  }
// var him=new Teacher();
// him.initialize("Adam",45); // try to find in Person not fond then check in teacher
// him.teach("Inheritance");
