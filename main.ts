export{}
let message = 'Hello World changed now';
console.log(message);


//no redeclaration is possible in TS whereas in JS vars can be redeclared
let x = 10;//let can be declared without initialisation
let z;
const y = 20; //const always requires an initialisation and throws error when not initialised
// const a; //error
//use const when the var is never going to be reassigned for the entire program length


//there are 3 variable types in typescript: number, boolean and string, null and undefined.
//to declare a var with type use colon (:) followed by the datatype as
 let myName: string = 'My Name';
 let myAge: number = 22;
 let isMale: boolean = true;

 //using template string using backticks
 let sentence: string = `My name is ${myName} 
and i am learning typescript`;
 console.log(sentence);



//benefit of datatypes is static typechecking, so you mistakenly donot assign a boolean to a string, or vice versa

//null and undefined are subtypes of other data types
let n : null = null;
let u : undefined = undefined;

//not much use as such but with other datatypes they become useful



//array declaration methods 
//1st is the square bracket
let list1: number[] = [1,2,3,4];

//2nd is the Array<type> method
let list2: Array<string> = ['one','two','three'];


// for mixed datatype arrays we have tuples
let tuple1: [number, string, boolean] = [25, 'ABCD', true];
//must be in same order as specified in the tuple declaration


//for sets we have enums. declared by enum keyword as enum nameOfEnum {values} and they start with 0 index 
//lets create an enum 
enum Fruits {Apple, Banana, Grapes, Pineapple};
let anything: Fruits = Fruits.Grapes;
console.log(anything);//prints index of grapes or say the value it stores

//to start from a different index we give the start index/value to the first element as
enum newEnum {first=7, second, third};
let something: newEnum = newEnum.third; //will get 9 
console.log(something);


//any data type is useful for values whose datatype id dynamic in nature
let rand: any = 'Any String';
rand = 250;
rand = false;

//the any type is the most capable type in typescript


//multitype variable in typescript using the union of datatypes this var has to support
let multiTypeVar : string | number;
multiTypeVar = 25;
multiTypeVar = ' A String ';


/* functions in typeScript */
//general js functions
function add(n1,n2){
    return n1+n2;
}
//calling this
console.log(add(1,2));
console.log(add('abc', 5));//works with other types as well


//typescript argument type functions
/* 
function functionName (parameter1: type, parameter2: type): returnType {
    fubction body
} */
function addInTs(n1:number, n2: number): number{
    return n1+n2;
}

console.log(addInTs(2,3));
// console.log(addInTs(2, 'string')); doesnt work


//by default all params are required in ts but you can make them optional using ? 

//passing optional parameters and defaukt params
function sub(num1: number, num2: number = 50): number{
    return num2-num1;
}
console.log(sub(10, 30));//20
console.log(sub(20)); //30 using default num2 as 50


/* Interfaces in TS */
interface fullName {
    firstName: string;
    lastName : string;
}

function fullName(person: fullName){
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName :'Neeraj',
    lastName : 'Srivastava'
};
fullName(p);


//classes and inheritance in typeScript

//using class keyword followed by class name

class Employee {
    protected empName : string;

    constructor(name: string){
        this.empName = name;
    }
    showName(){
        console.log(`Hi you are ${this.empName}`);
    }
}

let emp1 = new Employee('Neeraj');
emp1.showName();
//console.log(emp1.empName); //not acessible due to private

//for inheriting the class properties we use extend keyword

class Manager extends Employee {
    constructor(managerName: string){
        //if manager is created with the constructor we use the parents constructor to assign the value
        super(managerName);
    }
    assignWork(){
        console.log(`Manager can assign tasks to individuals under them.`);
    }
}
//objects of manager class
let m1 = new Manager('Manager Sahab');
m1.assignWork();
m1.showName();
// console.log(m1.empName); //not accessible outside the child class and parent class


//access modifiers public, protected, private
//by default all are public 
//private means only acessible inside the class(only by methods inside the class)
//if you want access to properties within your class and all your derieved classes you use protected keyword
//it will show error if you make the empName private or protected check them out



