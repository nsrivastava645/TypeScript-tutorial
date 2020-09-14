"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello World changed now';
console.log(message);
//no redeclaration is possible in TS whereas in JS vars can be redeclared
var x = 10; //let can be declared without initialisation
var z;
var y = 20; //const always requires an initialisation and throws error when not initialised
// const a; //error
//use const when the var is never going to be reassigned for the entire program length
//there are 3 variable types in typescript: number, boolean and string, null and undefined.
//to declare a var with type use colon (:) followed by the datatype as
var myName = 'My Name';
var myAge = 22;
var isMale = true;
//using template string using backticks
var sentence = "My name is " + myName + " \nand i am learning typescript";
console.log(sentence);
//benefit of datatypes is static typechecking, so you mistakenly donot assign a boolean to a string, or vice versa
//null and undefined are subtypes of other data types
var n = null;
var u = undefined;
//not much use as such but with other datatypes they become useful
//array declaration methods 
//1st is the square bracket
var list1 = [1, 2, 3, 4];
//2nd is the Array<type> method
var list2 = ['one', 'two', 'three'];
// for mixed datatype arrays we have tuples
var tuple1 = [25, 'ABCD', true];
//must be in same order as specified in the tuple declaration
//for sets we have enums. declared by enum keyword as enum nameOfEnum {values} and they start with 0 index 
//lets create an enum 
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Apple"] = 0] = "Apple";
    Fruits[Fruits["Banana"] = 1] = "Banana";
    Fruits[Fruits["Grapes"] = 2] = "Grapes";
    Fruits[Fruits["Pineapple"] = 3] = "Pineapple";
})(Fruits || (Fruits = {}));
;
var anything = Fruits.Grapes;
console.log(anything); //prints index of grapes or say the value it stores
//to start from a different index we give the start index/value to the first element as
var newEnum;
(function (newEnum) {
    newEnum[newEnum["first"] = 7] = "first";
    newEnum[newEnum["second"] = 8] = "second";
    newEnum[newEnum["third"] = 9] = "third";
})(newEnum || (newEnum = {}));
;
var something = newEnum.third; //will get 9 
console.log(something);
//any data type is useful for values whose datatype id dynamic in nature
var rand = 'Any String';
rand = 250;
rand = false;
//the any type is the most capable type in typescript
//multitype variable in typescript using the union of datatypes this var has to support
var multiTypeVar;
multiTypeVar = 25;
multiTypeVar = ' A String ';
/* functions in typeScript */
//general js functions
function add(n1, n2) {
    return n1 + n2;
}
//calling this
console.log(add(1, 2));
console.log(add('abc', 5)); //works with other types as well
//typescript argument type functions
/*
function functionName (parameter1: type, parameter2: type): returnType {
    fubction body
} */
function addInTs(n1, n2) {
    return n1 + n2;
}
console.log(addInTs(2, 3));
// console.log(addInTs(2, 'string')); doesnt work
//by default all params are required in ts but you can make them optional using ? 
//passing optional parameters and defaukt params
function sub(num1, num2) {
    if (num2 === void 0) { num2 = 50; }
    return num2 - num1;
}
console.log(sub(10, 30)); //20
console.log(sub(20)); //30 using default num2 as 50
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Neeraj',
    lastName: 'Srivastava'
};
fullName(p);
//classes and inheritance in typeScript
//using class keyword followed by class name
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.showName = function () {
        console.log("Hi you are " + this.empName);
    };
    return Employee;
}());
var emp1 = new Employee('Neeraj');
emp1.showName();
//console.log(emp1.empName); //not acessible due to private
//for inheriting the class properties we use extend keyword
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        //if manager is created with the constructor we use the parents constructor to assign the value
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.assignWork = function () {
        console.log("Manager can assign tasks to individuals under them.");
    };
    return Manager;
}(Employee));
//objects of manager class
var m1 = new Manager('Manager Sahab');
m1.assignWork();
m1.showName();
// console.log(m1.empName); //not accessible outside the child class and parent class
//access modifiers public, protected, private
//by default all are public 
//private means only acessible inside the class(only by methods inside the class)
//if you want access to properties within your class and all your derieved classes you use protected keyword
//it will show error if you make the empName private or protected check them out
