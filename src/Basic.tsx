export{}
let message='hello world';
console.log(message);

let x=10;
const y=20;  //const declaretion with value

let sum;
const title='codeevalution';

let isBeginner:boolean=true;
let total:number=0;
let name:string='vishal';


let sentence:string=`my name is ${name} i am beginner of typescript`;
console.log(sentence);

let n:null=null;
let u:undefined=undefined;


// let myName:string=undefined;

// array declartion
let list1:number[]=[1,2,3];
let list2:Array<number>=[1,2,3];

let person1:[string,number]=['vishal',22];  //value should be in order of declartion

//enum 
enum Color{Red=6,Green,Blue};    //we can set the value
let c:Color=Color.Green;
console.log(c);


let randomValue:any=10;
randomValue=true;
randomValue='vishal';

let myVariable:unknown=10;

function hasName(obj:any):obj is{name:string}{
    return !!obj &&
    typeof obj ==='object'&&
    'name 'in obj

}

if(hasName(myVariable)){
let myVariable:any=10;
console.log(myVariable.name);
}

// (myVariable as string).toUpperCase();

//type inference

let a;
a=10;
a=true;

let b=20;
 let multiType:number|boolean;
 multiType=20;
 multiType=true;
 let anyType:any;
 anyType=20;


// function in typescript{optional indicate ?}

function add(num1:number,num2:number):number{
    return num1+num2;

}
console.log("addition",add(5,10));


//default parameter
function additon(num1:number,num2:number=10):number{
    if(num2){
        return num1+num2;
    }
    else
    return num1;

}
additon(5,10);
additon(5);

//interfaces{? defined optional type}

interface person{
    firstName:string,
    lastName:string
}

// function fullName(person:{firstName:string,lastName:string}){
//     console.log(`${person.firstName} ${person.lastName}`);
// }

function fullName(person:person){
    console.log(`${person.firstName} ${person.lastName}`);
}


let p={
    firstName:'vishal',
    lastName:'mane patil'
};

fullName(p);

//classes and access modifiers
class Employee{
     employeeName:string;

     constructor(name:string){
         this.employeeName=name
     }

     greet(){
         console.log(`good Morning ${this.employeeName}`);
     }
}

let emp1=new Employee('vishalmane');
console.log(emp1.employeeName);
emp1.greet();


class Manager extends Employee{
    constructor(managerName:string){
        super(managerName)

    }

    delegatework(){
        console.log(`manger delegate the works`);

    }
}

let m1=new Manager('brucetom');
m1.delegatework();
m1.greet();
console.log(m1.employeeName);


//access modifier

//public
//private
//protcted




